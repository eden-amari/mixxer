from typing import Dict
import time
import logging
from django.conf import settings

from apps.tracks.services.feature_service import (
    AudioFeatureRateLimitError,
    AudioFeatureService,
    AudioFeatureTemporaryError,
)


logger = logging.getLogger(__name__)


class EnrichmentService:

    _cache = {}
    _skip_cache = {}
    _daily_limit = 100
    _calls_made = 0
    _last_call_time = 0
    _cooldown_until = 0

    _rate_limit_per_sec = getattr(settings, "AUDIO_FEATURE_RATE_LIMIT_PER_SEC", 1.0)
    _retry_attempts = 1
    _skip_ttl_seconds = getattr(settings, "AUDIO_FEATURE_SKIP_TTL_SECONDS", 900)
    _cooldown_seconds = getattr(settings, "AUDIO_FEATURE_COOLDOWN_SECONDS", 8)
    _max_enrichments_per_run = getattr(settings, "AUDIO_FEATURE_IMPORT_BUDGET", 20)
    _run_enrichment_count = 0

    @classmethod
    def enrich(cls, data: Dict, access_token: str) -> Dict:

        spotify_id = data.get("spotify_id")

        if not spotify_id:
            return data

        if spotify_id in cls._cache:
            return cls._cache[spotify_id]

        if data.get("bpm") and data.get("energy"):
            return data

        if not cls.should_attempt_enrichment(spotify_id):
            return data

        if cls._calls_made >= cls._daily_limit:
            return data

        enriched = cls._safe_enrich(data)

        cls._cache[spotify_id] = enriched

        return enriched

    @classmethod
    def start_run(cls):
        cls._run_enrichment_count = 0

    @classmethod
    def should_attempt_enrichment(cls, spotify_id: str | None) -> bool:
        if not spotify_id:
            return False

        now = time.time()

        if cls._run_enrichment_count >= cls._max_enrichments_per_run:
            return False

        if now < cls._cooldown_until:
            return False

        expires_at = cls._skip_cache.get(spotify_id)
        if expires_at and expires_at > now:
            return False

        if expires_at and expires_at <= now:
            cls._skip_cache.pop(spotify_id, None)

        return True

    @classmethod
    def _safe_enrich(cls, data: Dict) -> Dict:
        spotify_id = data.get("spotify_id")

        for attempt in range(cls._retry_attempts):
            cls._throttle()

            try:
                enriched = cls._enrich_internal(data)
                cls._run_enrichment_count += 1

                if enriched != data:
                    cls._calls_made += 1
                else:
                    cls._remember_skip(spotify_id, ttl=cls._skip_ttl_seconds)

                return enriched

            except AudioFeatureRateLimitError as exc:
                retry_after = exc.retry_after or cls._cooldown_seconds
                cls._cooldown_until = max(cls._cooldown_until, time.time() + retry_after)
                cls._remember_skip(spotify_id, ttl=retry_after)
                logger.warning(
                    "Track enrichment rate limited for spotify_id=%s; cooling down for %.1fs",
                    spotify_id,
                    retry_after,
                )
                return data

            except AudioFeatureTemporaryError as exc:
                cls._remember_skip(spotify_id, ttl=cls._skip_ttl_seconds)
                logger.warning(
                    "Track enrichment temporarily unavailable for spotify_id=%s: %s",
                    spotify_id,
                    exc,
                )
                return data

            except Exception as exc:
                cls._remember_skip(spotify_id, ttl=cls._skip_ttl_seconds)
                logger.warning(
                    "Track enrichment failed for spotify_id=%s: %s",
                    spotify_id,
                    exc,
                )
                return data

        return data

    @classmethod
    def _throttle(cls):
        now = time.time()

        # minimum interval between calls
        min_interval = 1 / cls._rate_limit_per_sec

        elapsed = now - cls._last_call_time

        if elapsed < min_interval:
            time.sleep(min_interval - elapsed)

        cls._last_call_time = time.time()

    @classmethod
    def _enrich_internal(cls, data: Dict) -> Dict:

        spotify_id = data.get("spotify_id")

        if not spotify_id:
            return data

        features = AudioFeatureService.get_features(
            spotify_id,
            title=data.get("title"),
            artist=data.get("artist")
        )

        if not features:
            return data

        return {
            **data,
            "bpm": features.get("bpm") or data.get("bpm"),
            "energy": features.get("energy") or data.get("energy"),
            "valence": features.get("valence") or data.get("valence"),
            "danceability": features.get("danceability") or data.get("danceability"),
            "loudness": features.get("loudness") or data.get("loudness"),
        }

    @classmethod
    def _remember_skip(cls, spotify_id: str | None, ttl: float):
        if not spotify_id:
            return
        cls._skip_cache[spotify_id] = time.time() + max(ttl, 1)

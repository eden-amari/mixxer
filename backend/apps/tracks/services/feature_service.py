import requests
import time
import logging
from typing import Dict, Optional
from django.conf import settings


logger = logging.getLogger(__name__)


class AudioFeatureServiceError(Exception):
    pass


class AudioFeatureRateLimitError(AudioFeatureServiceError):
    def __init__(self, retry_after: Optional[float] = None):
        super().__init__("Audio feature API rate limited")
        self.retry_after = retry_after


class AudioFeatureTemporaryError(AudioFeatureServiceError):
    pass


class AudioFeatureService:
    """
    Fetch audio features using SoundNet (RapidAPI Track Analysis API).

    Strategy:
    - PRIMARY: Spotify track ID
    - FALLBACK: title + artist
    - Fail gracefully
    """

    BASE_URL = "https://track-analysis.p.rapidapi.com"
    HEADERS = {
        "x-rapidapi-key": settings.RAPIDAPI_KEY,
        "x-rapidapi-host": "track-analysis.p.rapidapi.com"
    }

    TIMEOUT = 5
    SESSION = requests.Session()

    # ==================================================
    # PUBLIC ENTRY
    # ==================================================

    @classmethod
    def get_features(
        cls,
        external_id: str,
        title: str = None,
        artist: str = None
    ) -> Optional[Dict]:

        # ------------------------
        # PRIMARY: Spotify ID
        # ------------------------
        if external_id:
            features = cls._fetch_by_spotify_id(external_id)
            if features:
                return features

        # ------------------------
        # FALLBACK: title search
        # ------------------------
        if title:
            return cls._fetch_by_query(title, artist)

        return None

    # ==================================================
    # FETCH METHODS
    # ==================================================

    @classmethod
    def _fetch_by_spotify_id(cls, external_id: str) -> Optional[Dict]:
        url = f"{cls.BASE_URL}/pktx/spotify/{external_id}"
        response = cls._request(url, context=f"spotify_id={external_id}")
        if response is None:
            return None
        return cls._normalize_response(response)

    @classmethod
    def _fetch_by_query(cls, title: str, artist: str = None) -> Optional[Dict]:
        url = f"{cls.BASE_URL}/pktx/analysis"

        params = {"song": title}
        if artist:
            params["artist"] = artist

        response = cls._request(url, params=params, context=f"title='{title}'")
        if response is None:
            return None
        return cls._normalize_response(response)

    @classmethod
    def _request(cls, url: str, params=None, context: str = "") -> Optional[Dict]:
        try:
            response = cls.SESSION.get(
                url,
                headers=cls.HEADERS,
                params=params,
                timeout=cls.TIMEOUT,
            )
        except requests.exceptions.Timeout as exc:
            logger.warning("Audio feature API timed out for %s", context)
            raise AudioFeatureTemporaryError("timeout") from exc
        except requests.RequestException as exc:
            logger.warning("Audio feature API request failed for %s: %s", context, exc)
            raise AudioFeatureTemporaryError("request_failed") from exc

        if response.status_code == 200:
            return response.json()

        if response.status_code == 404:
            return None

        if response.status_code == 429:
            retry_after = cls._safe_retry_after(response.headers.get("Retry-After"))
            logger.warning("Audio feature API returned status 429 for %s", context)
            raise AudioFeatureRateLimitError(retry_after=retry_after)

        if response.status_code >= 500:
            logger.warning(
                "Audio feature API returned temporary status %s for %s",
                response.status_code,
                context,
            )
            raise AudioFeatureTemporaryError(f"status_{response.status_code}")

        logger.warning(
            "Audio feature API returned status %s for %s",
            response.status_code,
            context,
        )
        return None

    # ==================================================
    # NORMALIZATION
    # ==================================================

    @staticmethod
    def _normalize_response(data: Dict) -> Dict:
        """
        Normalize API response → internal format

        Returns:
        {
            bpm: int
            energy: float (0–1)
            danceability: float (0–1)
            loudness: float
            valence: float (optional mood)
        }
        """

        return {
            "bpm": AudioFeatureService._safe_int(data.get("tempo")),
            "energy": AudioFeatureService._normalize_percent(data.get("energy")),
            "danceability": AudioFeatureService._normalize_percent(data.get("danceability")),
            "loudness": AudioFeatureService._safe_float(data.get("loudness")),
            "valence": AudioFeatureService._normalize_percent(
                data.get("happiness")
            ),
        }

    # ==================================================
    # HELPERS
    # ==================================================

    @staticmethod
    def _safe_int(value):
        try:
            return int(value) if value is not None else None
        except:
            return None

    @staticmethod
    def _safe_float(value):
        try:
            if value is None:
                return None

            if isinstance(value, str):
                value = value.replace(" dB", "")

            return float(value)

        except:
            return None

    @staticmethod
    def _normalize_percent(value):
        """
        Normalize 0–100 → 0–1
        OR pass through if already 0–1
        """
        try:
            if value is None:
                return None

            value = float(value)

            if value > 1:
                return value / 100

            return value

        except:
            return None

    @staticmethod
    def _safe_retry_after(value) -> Optional[float]:
        try:
            return float(value) if value is not None else None
        except (TypeError, ValueError):
            return None

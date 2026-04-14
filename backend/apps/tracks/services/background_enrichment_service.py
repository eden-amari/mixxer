from __future__ import annotations

import logging
import queue
import threading
from typing import Iterable

from django.db import close_old_connections

from apps.tracks.models import Track
from apps.tracks.services.enrichment_service import EnrichmentService
from apps.tracks.services.track_services import TrackService


logger = logging.getLogger(__name__)


class BackgroundEnrichmentService:
    _queue: "queue.Queue[int]" = queue.Queue()
    _pending_track_ids: set[int] = set()
    _lock = threading.Lock()
    _worker_started = False

    @classmethod
    def enqueue_tracks(cls, track_ids: Iterable[int]) -> None:
        cls._ensure_worker()

        with cls._lock:
            for track_id in track_ids:
                if not track_id or track_id in cls._pending_track_ids:
                    continue
                cls._pending_track_ids.add(track_id)
                cls._queue.put(track_id)

    @classmethod
    def _ensure_worker(cls) -> None:
        with cls._lock:
            if cls._worker_started:
                return

            worker = threading.Thread(
                target=cls._worker_loop,
                name="musicmixxer-background-enrichment",
                daemon=True,
            )
            worker.start()
            cls._worker_started = True

    @classmethod
    def _worker_loop(cls) -> None:
        while True:
            track_id = cls._queue.get()
            try:
                cls._process_track(track_id)
            except Exception:
                logger.exception("Background enrichment failed for track_id=%s", track_id)
            finally:
                with cls._lock:
                    cls._pending_track_ids.discard(track_id)
                cls._queue.task_done()

    @classmethod
    def _process_track(cls, track_id: int) -> None:
        close_old_connections()
        try:
            track = Track.objects.get(id=track_id)
        except Track.DoesNotExist:
            return

        if track.is_enriched:
            return

        payload = {
            "title": track.title,
            "artist": track.artist,
            "spotify_id": track.spotify_id,
            "bpm": track.bpm,
            "genre": track.genre,
            "energy": track.energy,
            "danceability": track.danceability,
            "loudness": track.loudness,
            "valence": track.valence,
        }

        if not EnrichmentService.should_attempt_enrichment(track.spotify_id):
            return

        enriched = EnrichmentService.enrich(payload, access_token=None)
        if enriched != payload:
            TrackService._update_enrichment(track, enriched)

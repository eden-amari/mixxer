from typing import Dict, List
from django.db import transaction

from apps.integrations.spotify.client import SpotifyClient
from apps.tracks.services.background_enrichment_service import BackgroundEnrichmentService
from apps.tracks.services.enrichment_service import EnrichmentService
from apps.tracks.services.track_services import TrackService

from apps.playlists.services.playlist_service import PlaylistService
from apps.playlists.services.playlist_item_service import PlaylistItemService


class SpotifyImportService:
    """
    Domain-level Spotify import service.

    Responsibilities:
    - Fetch Spotify data
    - Normalize
    - Resolve
    - Enrich
    - Store
    - Attach to playlist
    """

    @staticmethod
    @transaction.atomic
    def import_playlist(user, playlist_id: str, access_token: str) -> Dict:
        EnrichmentService.start_run()

        client = SpotifyClient(access_token)

        # --------------------
        # FETCH PLAYLIST META
        # --------------------
        playlist_data = client._request("GET", f"/playlists/{playlist_id}")

        playlist = PlaylistService.create_playlist(
            user=user,
            title=playlist_data.get("name"),
            description=playlist_data.get("description") or ""
        )

        # --------------------
        # FETCH TRACKS
        # --------------------
        items = client.get_playlist_items(playlist_id)

        stats = {
            "total": 0,
            "success": 0,
            "duplicates": 0,
            "failed": 0,
            "errors": [],
            "queued_for_enrichment": 0,
        }
        track_ids_to_enrich: list[int] = []

        # --------------------
        # PROCESS TRACKS
        # --------------------
        for index, item in enumerate(items):
            stats["total"] += 1

            try:
                # ✅ FIXED (only change)
                track = item.get("track") or item.get("item")

                if not track or not track.get("id"):
                    stats["failed"] += 1
                    continue

                # --------------------
                # NORMALIZE
                # --------------------
                data = {
                    "title": track.get("name"),
                    "artist": track.get("artists", [{}])[0].get("name"),
                    "spotify_id": track.get("id"),
                    "genre": "unknown",
                }

                spotify_id = data.get("spotify_id")
                title = data.get("title")
                artist = data.get("artist")
                track_obj = None

                if spotify_id:
                    track_obj = TrackService.get_by_spotify_id(spotify_id)

                if not track_obj and title and artist:
                    from apps.imports.domain.utils import generate_track_key

                    unique_key = generate_track_key({"title": title, "artist": artist})
                    track_obj = TrackService.get_by_unique_key(unique_key)

                if track_obj and track_obj.is_enriched:
                    stats["duplicates"] += 1
                    PlaylistItemService.add_song_to_playlist(
                        playlist_id=playlist.id,
                        track_id=track_obj.id,
                        user=user,
                        position=index + 1
                    )
                    continue

                # --------------------
                # RESOLVE (optional)
                # --------------------
                resolved = data

                # --------------------
                # ENRICH
                # --------------------
                enriched = resolved
                if EnrichmentService.should_attempt_enrichment(resolved.get("spotify_id")):
                    try:
                        enriched = EnrichmentService.enrich(resolved, access_token) or resolved
                    except Exception:
                        enriched = resolved

                if track_obj:
                    # Track exists — check if enriched
                    if track_obj.is_enriched:
                        # ✅ Already enriched — skip, no DB write
                        stats["duplicates"] += 1
                    else:
                        # ⚡ Exists but incomplete — fill in missing fields only
                        TrackService._update_enrichment(track_obj, enriched)
                        stats["success"] += 1
                else:
                    # Brand new track — create safely
                    track_obj, created = TrackService.create_safe(enriched)

                    if created:
                        stats["success"] += 1
                    else:
                        stats["duplicates"] += 1

                if track_obj and not track_obj.is_enriched:
                    track_ids_to_enrich.append(track_obj.id)

                # --------------------
                # ATTACH
                # --------------------
                PlaylistItemService.add_song_to_playlist(
                    playlist_id=playlist.id,
                    track_id=track_obj.id,
                    user=user,
                    position=index + 1
                )

            except Exception as e:
                stats["failed"] += 1
                stats["errors"].append(str(e))

        unique_track_ids_to_enrich = list(dict.fromkeys(track_ids_to_enrich))
        stats["queued_for_enrichment"] = len(unique_track_ids_to_enrich)
        transaction.on_commit(
            lambda: BackgroundEnrichmentService.enqueue_tracks(unique_track_ids_to_enrich)
        )

        return {
            "playlist_id": playlist.id,
            "playlist_title": playlist.title,
            **stats,
        }

    # --------------------------------------------------
    # OPTIONAL: Import ALL playlists
    # --------------------------------------------------
    @staticmethod
    def import_all_user_playlists(user, access_token: str) -> List[Dict]:

        client = SpotifyClient(access_token)
        playlists = client.get_user_playlists()

        results = []

        for p in playlists:
            try:
                result = SpotifyImportService.import_playlist(
                    user=user,
                    playlist_id=p.get("id"),
                    access_token=access_token
                )
                results.append({
                    "playlist": p.get("name"),
                    "stats": result
                })
            except Exception as e:
                results.append({
                    "playlist": p.get("name", "unknown"),
                    "error": str(e)
                })

        return results

from apps.playlists.models import Playlist, PlaylistItem
from apps.tracks.services.background_enrichment_service import BackgroundEnrichmentService


class PlaylistService:

    @staticmethod
    def create_playlist(user, title, description=""):
        if not title:
            raise ValueError("Title is required")

        return Playlist.objects.create(
            user=user,
            title=title,
            description=description
        )

    @staticmethod
    def get_playlist(playlist_id, user):
        try:
            return Playlist.objects.get(id=playlist_id, user=user)
        except Playlist.DoesNotExist:
            raise ValueError("Playlist not found")

    @staticmethod
    def get_user_playlists(user):
        return Playlist.objects.filter(user=user).order_by("-created_at")

    @staticmethod
    def update_playlist(playlist_id, user, data):
        playlist = PlaylistService.get_playlist(playlist_id, user)

        if "title" in data:
            if not data["title"]:
                raise ValueError("Title cannot be empty")
            playlist.title = data["title"]

        if "description" in data:
            playlist.description = data["description"]

        if "is_public" in data:
            playlist.is_public = data["is_public"]

        playlist.save()
        return playlist

    @staticmethod
    def delete_playlist(playlist_id, user):
        playlist = PlaylistService.get_playlist(playlist_id, user)
        playlist.delete()

    @staticmethod
    def get_playlist_with_items(playlist_id, user, queue_missing_enrichment=True):
        playlist = PlaylistService.get_playlist(playlist_id, user)

        items = PlaylistItem.objects.filter(
            playlist=playlist
        ).select_related("track").order_by("position")

        missing_track_ids = []
        enriched_count = 0
        enrichable_count = 0

        serialized_items = []
        for item in items:
            track = item.track
            if track and track.spotify_id:
                enrichable_count += 1
                if track.is_enriched:
                    enriched_count += 1
                else:
                    missing_track_ids.append(track.id)

            serialized_items.append(
                {
                    "id": item.id,
                    "position": item.position,
                    "track": {
                        "id": track.id if track else None,
                        "title": track.title if track else None,
                        "bpm": track.bpm if track else None,
                        "energy": track.energy if track else None,
                        "valence": track.valence if track else None,
                    }
                }
            )

        if queue_missing_enrichment and missing_track_ids:
            BackgroundEnrichmentService.enqueue_tracks(missing_track_ids)

        return {
            "id": playlist.id,
            "title": playlist.title,
            "description": playlist.description,
            "is_public": playlist.is_public,
            "items": serialized_items,
            "enrichment": {
                "enrichable_tracks": enrichable_count,
                "enriched_tracks": enriched_count,
                "pending_tracks": max(enrichable_count - enriched_count, 0),
                "status": "complete" if enrichable_count == 0 or enriched_count == enrichable_count else "in_progress",
            },
        }

    @staticmethod
    def get_playlist_items_only(playlist_id, user):
        playlist = PlaylistService.get_playlist(playlist_id, user)

        return PlaylistItem.objects.filter(
            playlist=playlist
        ).order_by("position")

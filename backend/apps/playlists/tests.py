from django.contrib.auth import get_user_model
from django.test import TestCase
from unittest.mock import patch

from apps.playlists.models import Playlist, PlaylistItem
from apps.playlists.domain.spotify_import_service import SpotifyImportService
from apps.playlists.domain.organization_service import OrganizationService
from apps.playlists.services.playlist_item_service import PlaylistItemService
from apps.playlists.services.playlist_service import PlaylistService
from apps.tracks.models import Track


User = get_user_model()


class TestPlaylistService(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="testuser",
            email="test@test.com",
            password="test123",
        )
        self.track_one = Track.objects.create(
            title="Track One",
            artist="Artist One",
            unique_key="track-one-artist-one",
        )
        self.track_two = Track.objects.create(
            title="Track Two",
            artist="Artist Two",
            unique_key="track-two-artist-two",
        )

    def test_create_playlist(self):
        playlist = PlaylistService.create_playlist(self.user, "Test")

        self.assertEqual(playlist.title, "Test")
        self.assertEqual(playlist.user, self.user)

    def test_create_playlist_empty_title(self):
        with self.assertRaises(ValueError):
            PlaylistService.create_playlist(self.user, "")

    def test_get_user_playlists(self):
        PlaylistService.create_playlist(self.user, "A")
        PlaylistService.create_playlist(self.user, "B")

        playlists = PlaylistService.get_user_playlists(self.user)

        self.assertEqual(playlists.count(), 2)

    def test_update_playlist(self):
        playlist = PlaylistService.create_playlist(self.user, "Old")

        updated = PlaylistService.update_playlist(
            playlist.id,
            self.user,
            {"title": "New"},
        )

        self.assertEqual(updated.title, "New")

    def test_update_playlist_not_owner(self):
        other_user = User.objects.create_user(
            username="otheruser",
            email="x@test.com",
            password="123",
        )
        playlist = PlaylistService.create_playlist(self.user, "Test")

        with self.assertRaises(ValueError):
            PlaylistService.update_playlist(
                playlist.id,
                other_user,
                {"title": "Hack"},
            )

    def test_delete_playlist(self):
        playlist = PlaylistService.create_playlist(self.user, "Delete")

        PlaylistService.delete_playlist(playlist.id, self.user)

        self.assertEqual(Playlist.objects.count(), 0)

    def test_get_playlist_with_items(self):
        playlist = PlaylistService.create_playlist(self.user, "Test")
        PlaylistItemService.add_song_to_playlist(playlist.id, self.track_one.id, self.user)
        PlaylistItemService.add_song_to_playlist(playlist.id, self.track_two.id, self.user)

        data = PlaylistService.get_playlist_with_items(playlist.id, user=self.user)

        self.assertEqual(len(data["items"]), 2)
        self.assertEqual(data["items"][0]["track"]["id"], self.track_one.id)
        self.assertEqual(data["items"][1]["track"]["id"], self.track_two.id)
        self.assertEqual(data["enrichment"]["enrichable_tracks"], 0)
        self.assertEqual(data["enrichment"]["pending_tracks"], 0)

    @patch("apps.playlists.services.playlist_service.BackgroundEnrichmentService.enqueue_tracks")
    def test_get_playlist_with_items_queues_missing_enrichment(self, mock_enqueue):
        playlist = PlaylistService.create_playlist(self.user, "Queued")
        track = Track.objects.create(
            title="Needs Enrichment",
            artist="Artist",
            spotify_id="spotify-needs-enrichment",
            unique_key="needs-enrichment-artist",
            genre=None,
            bpm=None,
            energy=None,
        )
        PlaylistItemService.add_song_to_playlist(playlist.id, track.id, self.user)

        data = PlaylistService.get_playlist_with_items(playlist.id, user=self.user)

        self.assertEqual(data["enrichment"]["enrichable_tracks"], 1)
        self.assertEqual(data["enrichment"]["enriched_tracks"], 0)
        self.assertEqual(data["enrichment"]["pending_tracks"], 1)
        self.assertEqual(data["enrichment"]["status"], "in_progress")
        mock_enqueue.assert_called_once_with([track.id])


class TestPlaylistItemService(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="testuser",
            email="test@test.com",
            password="test123",
        )
        self.playlist = PlaylistService.create_playlist(self.user, "Test Playlist")
        self.track_one = Track.objects.create(
            title="Track One",
            artist="Artist One",
            unique_key="track-one-artist-one",
        )
        self.track_two = Track.objects.create(
            title="Track Two",
            artist="Artist Two",
            unique_key="track-two-artist-two",
        )
        self.track_three = Track.objects.create(
            title="Track Three",
            artist="Artist Three",
            unique_key="track-three-artist-three",
        )
        self.track_four = Track.objects.create(
            title="Track Four",
            artist="Artist Four",
            unique_key="track-four-artist-four",
        )

    def test_add_append(self):
        PlaylistItemService.add_song_to_playlist(self.playlist.id, self.track_one.id, self.user)
        PlaylistItemService.add_song_to_playlist(self.playlist.id, self.track_two.id, self.user)

        items = list(PlaylistItem.objects.order_by("position"))

        self.assertEqual(items[0].track_id, self.track_one.id)
        self.assertEqual(items[1].track_id, self.track_two.id)
        self.assertEqual([item.position for item in items], [1, 2])

    def test_add_insert_middle(self):
        PlaylistItemService.add_song_to_playlist(self.playlist.id, self.track_one.id, self.user)
        PlaylistItemService.add_song_to_playlist(self.playlist.id, self.track_two.id, self.user)
        PlaylistItemService.add_song_to_playlist(self.playlist.id, self.track_three.id, self.user)
        PlaylistItemService.add_song_to_playlist(
            self.playlist.id,
            self.track_four.id,
            self.user,
            position=2,
        )

        items = list(PlaylistItem.objects.order_by("position"))

        self.assertEqual(
            [item.track_id for item in items],
            [self.track_one.id, self.track_four.id, self.track_two.id, self.track_three.id],
        )

    def test_add_negative_position(self):
        with self.assertRaises(ValueError):
            PlaylistItemService.add_song_to_playlist(
                self.playlist.id,
                self.track_one.id,
                self.user,
                position=-1,
            )

    def test_add_position_out_of_bounds_appends(self):
        item = PlaylistItemService.add_song_to_playlist(
            self.playlist.id,
            self.track_one.id,
            self.user,
            position=100,
        )

        self.assertEqual(item.position, 1)

    def test_add_duplicates_allowed(self):
        PlaylistItemService.add_song_to_playlist(self.playlist.id, self.track_one.id, self.user)
        PlaylistItemService.add_song_to_playlist(self.playlist.id, self.track_one.id, self.user)

        self.assertEqual(PlaylistItem.objects.count(), 2)

    def test_remove_middle(self):
        for track in [self.track_one, self.track_two, self.track_three, self.track_four]:
            PlaylistItemService.add_song_to_playlist(self.playlist.id, track.id, self.user)

        PlaylistItemService.remove_song_from_playlist(self.playlist.id, 2, self.user)

        items = list(PlaylistItem.objects.order_by("position"))

        self.assertEqual([item.track_id for item in items], [self.track_one.id, self.track_three.id, self.track_four.id])
        self.assertEqual([item.position for item in items], [1, 2, 3])

    def test_remove_first(self):
        for track in [self.track_one, self.track_two, self.track_three]:
            PlaylistItemService.add_song_to_playlist(self.playlist.id, track.id, self.user)

        PlaylistItemService.remove_song_from_playlist(self.playlist.id, 1, self.user)

        items = list(PlaylistItem.objects.order_by("position"))

        self.assertEqual([item.track_id for item in items], [self.track_two.id, self.track_three.id])
        self.assertEqual([item.position for item in items], [1, 2])

    def test_remove_last(self):
        for track in [self.track_one, self.track_two, self.track_three]:
            PlaylistItemService.add_song_to_playlist(self.playlist.id, track.id, self.user)

        PlaylistItemService.remove_song_from_playlist(self.playlist.id, 3, self.user)

        items = list(PlaylistItem.objects.order_by("position"))

        self.assertEqual([item.track_id for item in items], [self.track_one.id, self.track_two.id])

    def test_remove_invalid_position(self):
        with self.assertRaises(ValueError):
            PlaylistItemService.remove_song_from_playlist(self.playlist.id, 1, self.user)

    def test_reorder_basic(self):
        items = []
        for track in [self.track_one, self.track_two, self.track_three]:
            item = PlaylistItemService.add_song_to_playlist(self.playlist.id, track.id, self.user)
            items.append(item)

        PlaylistItemService.reorder_playlist(
            self.playlist.id,
            [items[2].id, items[0].id, items[1].id],
            self.user,
        )

        result = list(PlaylistItem.objects.order_by("position"))

        self.assertEqual([item.track_id for item in result], [self.track_three.id, self.track_one.id, self.track_two.id])

    def test_reorder_invalid_length(self):
        PlaylistItemService.add_song_to_playlist(self.playlist.id, self.track_one.id, self.user)

        with self.assertRaises(ValueError):
            PlaylistItemService.reorder_playlist(self.playlist.id, [], self.user)

    def test_reorder_mismatch_items(self):
        PlaylistItemService.add_song_to_playlist(self.playlist.id, self.track_one.id, self.user)

        with self.assertRaises(ValueError):
            PlaylistItemService.reorder_playlist(self.playlist.id, [999], self.user)

    def test_reorder_with_duplicates(self):
        item_one = PlaylistItemService.add_song_to_playlist(self.playlist.id, self.track_one.id, self.user)
        item_two = PlaylistItemService.add_song_to_playlist(self.playlist.id, self.track_one.id, self.user)

        new_order = [item_two.id, item_one.id]
        PlaylistItemService.reorder_playlist(self.playlist.id, new_order, self.user)

        result = list(PlaylistItem.objects.order_by("position"))

        self.assertEqual([item.id for item in result], new_order)

    def test_positions_are_continuous(self):
        for track in [self.track_one, self.track_two, self.track_three, self.track_four]:
            PlaylistItemService.add_song_to_playlist(self.playlist.id, track.id, self.user)

        PlaylistItemService.remove_song_from_playlist(self.playlist.id, 2, self.user)

        items = list(PlaylistItem.objects.order_by("position"))

        self.assertEqual([item.position for item in items], [1, 2, 3])


class TestOrganizationService(TestCase):
    def test_bpm_sort_pushes_missing_bpm_to_bottom(self):
        tracks = [
            {"id": 1, "title": "Missing BPM", "bpm": None, "energy": 0.5, "valence": 0.5},
            {"id": 2, "title": "Slow", "bpm": 92.0, "energy": 0.4, "valence": 0.4},
            {"id": 3, "title": "Fast", "bpm": 128.0, "energy": 0.8, "valence": 0.7},
        ]

        ordered = OrganizationService.organize(tracks, strategy="bpm")

        self.assertEqual([track["id"] for track in ordered], [2, 3, 1])

    def test_smart_mix_appends_sparse_tracks_after_complete_tracks(self):
        tracks = [
            {"id": 1, "title": "Complete A", "bpm": 100.0, "energy": 0.3, "valence": 0.2},
            {"id": 2, "title": "Complete B", "bpm": 108.0, "energy": 0.35, "valence": 0.25},
            {"id": 3, "title": "Complete C", "bpm": 120.0, "energy": 0.5, "valence": 0.45},
            {"id": 4, "title": "Sparse BPM", "bpm": None, "energy": 0.55, "valence": 0.5},
            {"id": 5, "title": "Sparse Energy", "bpm": 122.0, "energy": None, "valence": 0.6},
        ]

        ordered = OrganizationService.organize(tracks, strategy="smart_mix")

        self.assertEqual([track["id"] for track in ordered[:3]], [1, 2, 3])
        self.assertEqual({track["id"] for track in ordered[3:]}, {4, 5})

    def test_smart_mix_handles_all_missing_metrics_without_crashing(self):
        tracks = [
            {"id": 1, "title": "Unknown A", "bpm": None, "energy": None, "valence": None},
            {"id": 2, "title": "Unknown B", "bpm": None, "energy": None, "valence": None},
            {"id": 3, "title": "Known", "bpm": 110.0, "energy": 0.4, "valence": 0.3},
        ]

        ordered = OrganizationService.organize(tracks, strategy="smart_mix")

        self.assertEqual(ordered[0]["id"], 3)
        self.assertEqual({track["id"] for track in ordered[1:]}, {1, 2})

    def test_energy_sort_pushes_missing_energy_to_bottom(self):
        tracks = [
            {"id": 1, "title": "Unknown energy", "bpm": 110.0, "energy": None, "valence": 0.3},
            {"id": 2, "title": "Low energy", "bpm": 115.0, "energy": 0.2, "valence": 0.4},
            {"id": 3, "title": "High energy", "bpm": 118.0, "energy": 0.9, "valence": 0.5},
        ]

        ordered = OrganizationService.organize(tracks, strategy="energy")

        self.assertEqual([track["id"] for track in ordered], [2, 3, 1])


class TestSpotifyImportService(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="spotifyimportservice",
            email="spotifyimportservice@example.com",
            password="test123",
        )

    @patch("apps.playlists.domain.spotify_import_service.transaction.on_commit")
    @patch("apps.playlists.domain.spotify_import_service.BackgroundEnrichmentService.enqueue_tracks")
    @patch("apps.playlists.domain.spotify_import_service.EnrichmentService.enrich")
    @patch("apps.playlists.domain.spotify_import_service.EnrichmentService.should_attempt_enrichment")
    @patch("apps.playlists.domain.spotify_import_service.SpotifyClient")
    def test_import_queues_incomplete_tracks_for_background_enrichment(
        self,
        mock_client_cls,
        mock_should_attempt,
        mock_enrich,
        mock_enqueue,
        mock_on_commit,
    ):
        mock_on_commit.side_effect = lambda fn: fn()
        mock_should_attempt.return_value = False
        mock_enrich.side_effect = AssertionError("foreground enrichment should be skipped")

        mock_client = mock_client_cls.return_value
        mock_client._request.return_value = {"name": "Spotify Import", "description": ""}
        mock_client.get_playlist_items.return_value = [
            {
                "track": {
                    "name": "Track One",
                    "id": "spotify-track-one",
                    "artists": [{"name": "Artist One"}],
                }
            },
            {
                "track": {
                    "name": "Track Two",
                    "id": "spotify-track-two",
                    "artists": [{"name": "Artist Two"}],
                }
            },
        ]

        result = SpotifyImportService.import_playlist(
            user=self.user,
            playlist_id="playlist-123",
            access_token="spotify-token",
        )

        self.assertEqual(result["queued_for_enrichment"], 2)
        mock_enqueue.assert_called_once()
        queued_ids = mock_enqueue.call_args[0][0]
        self.assertEqual(len(queued_ids), 2)

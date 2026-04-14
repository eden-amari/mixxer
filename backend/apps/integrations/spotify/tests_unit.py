from unittest.mock import Mock, patch

from django.test import SimpleTestCase

from apps.integrations.spotify.client import SpotifyClient


class SpotifyClientTests(SimpleTestCase):
    @patch.object(SpotifyClient, "_request")
    @patch.object(SpotifyClient, "get_current_user")
    def test_create_playlist_uses_current_user_endpoint(self, mock_get_current_user, mock_request):
        mock_get_current_user.return_value = {"id": "spotify-user-123"}
        mock_request.return_value = {"id": "playlist-123"}

        client = SpotifyClient("token")
        result = client.create_playlist(
            name="My Playlist",
            description="Created in test",
            public=False,
        )

        mock_request.assert_called_once_with(
            "POST",
            "/users/spotify-user-123/playlists",
            json={
                "name": "My Playlist",
                "description": "Created in test",
                "public": False,
            },
        )
        self.assertEqual(result["id"], "playlist-123")

    @patch("apps.integrations.spotify.client.requests.get")
    def test_get_user_playlists_paginates_all_results(self, mock_get):
        first = Mock(status_code=200)
        first.json.return_value = {
            "items": [{"id": "playlist-1"}],
            "next": "https://api.spotify.com/v1/me/playlists?offset=1",
        }
        second = Mock(status_code=200)
        second.json.return_value = {
            "items": [{"id": "playlist-2"}],
            "next": None,
        }
        mock_get.side_effect = [first, second]

        client = SpotifyClient("token")
        result = client.get_user_playlists()

        self.assertEqual(result, [{"id": "playlist-1"}, {"id": "playlist-2"}])
        self.assertEqual(mock_get.call_count, 2)

    @patch("apps.integrations.spotify.client.requests.get")
    def test_get_playlist_items_paginates_all_results(self, mock_get):
        first = Mock(status_code=200)
        first.json.return_value = {
            "items": [{"track": {"id": "track-1"}}],
            "next": "https://api.spotify.com/v1/playlists/pl-1/items?offset=1",
        }
        second = Mock(status_code=200)
        second.json.return_value = {
            "items": [{"track": {"id": "track-2"}}],
            "next": None,
        }
        mock_get.side_effect = [first, second]

        client = SpotifyClient("token")
        result = client.get_playlist_items("pl-1")

        self.assertEqual(
            result,
            [{"track": {"id": "track-1"}}, {"track": {"id": "track-2"}}],
        )
        self.assertEqual(mock_get.call_count, 2)

import requests
from typing import List, Dict


class SpotifyClient:
    """
    Spotify API Client (safe endpoints only)

    Responsibilities:
    - Fetch playlists
    - Fetch playlist items
    - Fetch track metadata
    - Create playlists
    - Add tracks to playlists

    Does NOT include:
    - audio features (deprecated)
    - recommendations (deprecated)
    """

    BASE_URL = "https://api.spotify.com/v1"

    def __init__(self, access_token: str):
        if not access_token:
            raise ValueError("Access token required")
        self.access_token = access_token

    def _headers(self) -> Dict:
        return {
            "Authorization": f"Bearer {self.access_token}"
        }

    def _request(self, method: str, endpoint: str, params=None, json=None) -> Dict:
        """
        Internal request handler

        Raises:
            Exception if request fails
        """
        url = f"{self.BASE_URL}{endpoint}"

        res = requests.request(
            method,
            url,
            headers=self._headers(),
            params=params,
            json=json
        )

        if res.status_code in [200, 201]:
            return res.json()

        if res.status_code in [401, 403]:
            raise PermissionError(self._format_error_message(res))

        raise Exception(self._format_error_message(res))

    def _paginate(self, endpoint: str, params=None) -> List[Dict]:
        items: List[Dict] = []
        next_url = f"{self.BASE_URL}{endpoint}"
        next_params = params

        while next_url:
            res = requests.get(
                next_url,
                headers=self._headers(),
                params=next_params,
            )
            next_params = None

            if res.status_code != 200:
                if res.status_code in [401, 403]:
                    raise PermissionError(self._format_error_message(res))
                raise Exception(self._format_error_message(res))

            payload = res.json()
            items.extend(payload.get("items", []))
            next_url = payload.get("next")

        return items

    # --------------------------------------------------
    # USER
    # --------------------------------------------------

    def get_current_user(self) -> Dict:
        """
        Get current user profile
        """
        return self._request("GET", "/me")

    # --------------------------------------------------
    # PLAYLISTS
    # --------------------------------------------------

    def get_user_playlists(self) -> List[Dict]:
        """
        Fetch all playlists for current user
        """
        return self._paginate("/me/playlists", params={"limit": 50})

    def get_playlist_items(self, playlist_id: str) -> List[Dict]:
        """
        Fetch tracks from a playlist

        Uses NON-DEPRECATED endpoint:
        GET /playlists/{id}/items
        """
        return self._paginate(
            f"/playlists/{playlist_id}/items",
            params={"limit": 100},
        )

    # --------------------------------------------------
    # TRACKS
    # --------------------------------------------------

    def get_track(self, track_id: str) -> Dict:
        """
        Fetch track metadata (name, artist, album, etc.)
        """
        return self._request("GET", f"/tracks/{track_id}")

    # --------------------------------------------------
    # WRITE OPERATIONS
    # --------------------------------------------------

    def create_playlist(self, name: str, description: str = "", public: bool = False) -> Dict:
        """
        Create a new playlist for current user

        Endpoint:
        POST /me/playlists
        """
        return self._request(
            "POST",
            "/me/playlists",
            json={
                "name": name,
                "description": description,
                "public": public
            }
        )

    def add_tracks_to_playlist(self, playlist_id: str, track_ids: List[str]) -> Dict:
        """
        Add tracks to a playlist

        Uses NON-DEPRECATED endpoint:
        POST /playlists/{id}/items
        """
        uris = [f"spotify:track:{tid}" for tid in track_ids]

        return self._request(
            "POST",
            f"/playlists/{playlist_id}/items",
            json={"uris": uris}
        )

    @staticmethod
    def _format_error_message(response: requests.Response) -> str:
        try:
            payload = response.json()
        except ValueError:
            payload = None

        spotify_error = payload.get("error") if isinstance(payload, dict) else None
        spotify_message = (
            spotify_error.get("message")
            if isinstance(spotify_error, dict)
            else None
        )

        if response.status_code == 401:
            return "Spotify authorization expired. Reconnect Spotify and try again."

        if response.status_code == 403:
            if spotify_message and "forbidden" not in spotify_message.lower():
                return (
                    "Spotify denied playlist write access: "
                    f"{spotify_message}. Reconnect Spotify and try again."
                )
            return "Spotify denied playlist write access. Reconnect Spotify and try again."

        if spotify_message:
            return f"{response.status_code}: {spotify_message}"

        return f"{response.status_code}: {response.text}"
    

# --------------------------------------------------
# SEARCH (🔥 MISSING)
# --------------------------------------------------

    def search_tracks(self, query: str, limit: int = 5) -> Dict:
        """
        Search tracks using Spotify API

        Endpoint:
        GET /search?q=...&type=track
        """
        return self._request(
            "GET",
            "/search",
            params={
                "q": query,
                "type": "track",
                "limit": limit
            }
        )

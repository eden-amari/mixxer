from ninja import Router
from django.shortcuts import redirect
from urllib.parse import urlencode
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
import requests
import re

router = Router()
User = get_user_model()


def _build_username(display_name: str | None, spotify_id: str) -> str:
    base = (display_name or spotify_id or "spotify_user").strip().lower()
    base = re.sub(r"[^a-z0-9_]+", "_", base).strip("_")
    base = base[:24] or "spotify_user"
    candidate = base
    suffix = 1

    while User.objects.filter(username=candidate).exists():
        candidate = f"{base[:20]}_{suffix}"
        suffix += 1

    return candidate


@router.get("/login")
def spotify_login(request):
    params = {
        "client_id": settings.SPOTIFY_CLIENT_ID,
        "response_type": "code",
        "redirect_uri": settings.SPOTIFY_REDIRECT_URI,
        "scope": " ".join([
            "user-read-private",
            "user-read-email",
            "playlist-read-private",
            "playlist-read-collaborative",
            "playlist-modify-private",
            "playlist-modify-public",
        ]),
        "show_dialog": True,
    }

    url = f"https://accounts.spotify.com/authorize?{urlencode(params)}"
    return redirect(url)

@router.get("/callback")
def spotify_callback(request, code: str = None, error: str = None):

    if error:
        params = urlencode({"error": error})
        return redirect(f"{settings.FRONTEND_URL}/auth/spotify/callback?{params}")

    if not code:
        params = urlencode({"error": "Missing code"})
        return redirect(f"{settings.FRONTEND_URL}/auth/spotify/callback?{params}")

    token_url = "https://accounts.spotify.com/api/token"

    data = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": settings.SPOTIFY_REDIRECT_URI,
        "client_id": settings.SPOTIFY_CLIENT_ID,
        "client_secret": settings.SPOTIFY_CLIENT_SECRET,
    }

    response = requests.post(token_url, data=data)

    if response.status_code != 200:
        params = urlencode({"error": response.text})
        return redirect(f"{settings.FRONTEND_URL}/auth/spotify/callback?{params}")

    token_data = response.json()
    access_token = token_data["access_token"]
    refresh_token = token_data.get("refresh_token", "")

    profile_response = requests.get(
        "https://api.spotify.com/v1/me",
        headers={"Authorization": f"Bearer {access_token}"},
    )

    if profile_response.status_code != 200:
        params = urlencode({"error": profile_response.text})
        return redirect(f"{settings.FRONTEND_URL}/auth/spotify/callback?{params}")

    profile = profile_response.json()
    spotify_id = profile.get("id")
    email = profile.get("email") or (
        f"{spotify_id}@spotify.musicmixxer.local" if spotify_id else None
    )

    if not email:
        params = urlencode({"error": "Spotify profile email not available"})
        return redirect(f"{settings.FRONTEND_URL}/auth/spotify/callback?{params}")

    display_name = profile.get("display_name") or ""

    user = User.objects.filter(email=email).first()

    if user is None:
        user = User.objects.create(
            email=email,
            username=_build_username(display_name, spotify_id or "spotify"),
            name=display_name,
        )
        user.set_unusable_password()
        user.save()
    else:
        updates = []
        if display_name and not user.name:
            user.name = display_name
            updates.append("name")
        if not user.username:
            user.username = _build_username(display_name, spotify_id or "spotify")
            updates.append("username")
        if updates:
            user.save(update_fields=updates)

    app_refresh = RefreshToken.for_user(user)

    params = urlencode({
        "access_token": str(app_refresh.access_token),
        "refresh_token": str(app_refresh),
        "spotify_token": access_token,
        "spotify_refresh_token": refresh_token,
        "email": user.email,
        "username": user.username,
        "name": user.name or "",
    })
    return redirect(f"{settings.FRONTEND_URL}/auth/spotify/callback?{params}")

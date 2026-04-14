import type { Session } from "@/lib/types";

const SESSION_KEY = "musicmixxer.session";
const PENDING_SPOTIFY_TOKEN_KEY = "musicmixxer.pendingSpotifyToken";
const PENDING_SPOTIFY_REFRESH_TOKEN_KEY = "musicmixxer.pendingSpotifyRefreshToken";
const POST_SPOTIFY_REDIRECT_KEY = "musicmixxer.postSpotifyRedirect";

export function readSession(): Session | null {
	if (typeof window === "undefined") {
		return null;
	}

	const raw = window.localStorage.getItem(SESSION_KEY);

	if (!raw) {
		return null;
	}

	try {
		return JSON.parse(raw) as Session;
	} catch {
		window.localStorage.removeItem(SESSION_KEY);
		return null;
	}
}

export function writeSession(session: Session | null) {
	if (typeof window === "undefined") {
		return;
	}

	if (!session) {
		window.localStorage.removeItem(SESSION_KEY);
		return;
	}

	window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function readPendingSpotifyToken(): string | null {
	if (typeof window === "undefined") {
		return null;
	}

	return window.localStorage.getItem(PENDING_SPOTIFY_TOKEN_KEY);
}

export function writePendingSpotifyToken(token: string | null) {
	if (typeof window === "undefined") {
		return;
	}

	if (!token) {
		window.localStorage.removeItem(PENDING_SPOTIFY_TOKEN_KEY);
		return;
	}

	window.localStorage.setItem(PENDING_SPOTIFY_TOKEN_KEY, token);
}

export function readPendingSpotifyRefreshToken(): string | null {
	if (typeof window === "undefined") {
		return null;
	}

	return window.localStorage.getItem(PENDING_SPOTIFY_REFRESH_TOKEN_KEY);
}

export function writePendingSpotifyRefreshToken(token: string | null) {
	if (typeof window === "undefined") {
		return;
	}

	if (!token) {
		window.localStorage.removeItem(PENDING_SPOTIFY_REFRESH_TOKEN_KEY);
		return;
	}

	window.localStorage.setItem(PENDING_SPOTIFY_REFRESH_TOKEN_KEY, token);
}

export function readPostSpotifyRedirect(): string | null {
	if (typeof window === "undefined") {
		return null;
	}

	return window.localStorage.getItem(POST_SPOTIFY_REDIRECT_KEY);
}

export function writePostSpotifyRedirect(path: string | null) {
	if (typeof window === "undefined") {
		return;
	}

	if (!path) {
		window.localStorage.removeItem(POST_SPOTIFY_REDIRECT_KEY);
		return;
	}

	window.localStorage.setItem(POST_SPOTIFY_REDIRECT_KEY, path);
}

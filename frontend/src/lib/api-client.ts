"use client";

import { readSession, writeSession } from "@/lib/session-storage";
import type {
	ExportResult,
	ImportResult,
	OrganizedTrack,
	PlaylistDetail,
	PlaylistSummary,
	Session,
	SpotifyPlaylist,
	SpotifyPlaylistTrack,
	User,
} from "@/lib/types";

const API_ROOT = "/api/backend";

type RequestOptions = {
	method?: "GET" | "POST" | "PATCH" | "DELETE";
	body?: BodyInit | null;
	json?: unknown;
	headers?: HeadersInit;
	auth?: boolean;
	spotify?: boolean;
	retry?: boolean;
};

type ApiEnvelope<T> = {
	success?: boolean;
	data?: T;
	error?: { message?: string };
	access?: string;
	refresh?: string;
	user?: User;
};

function buildHeaders(options: RequestOptions, session: Session | null) {
	const headers = new Headers(options.headers);

	if (options.json !== undefined) {
		headers.set("Content-Type", "application/json");
	}

	if (options.auth !== false && session?.accessToken) {
		headers.set("Authorization", `Bearer ${session.accessToken}`);
	}

	if (options.spotify && session?.spotifyToken) {
		headers.set("X-Spotify-Access-Token", session.spotifyToken);
	}

	return headers;
}

async function parseResponse<T>(response: Response): Promise<T> {
	const contentType = response.headers.get("content-type") ?? "";
	const payload = contentType.includes("application/json")
		? ((await response.json()) as ApiEnvelope<T>)
		: null;

	if (!response.ok) {
		const message =
			payload?.error?.message ||
			(typeof payload === "object" && payload !== null && "detail" in payload
				? String((payload as Record<string, unknown>).detail)
				: "Request failed");
		throw new Error(message);
	}

	if (payload && payload.success === false) {
		throw new Error(payload.error?.message || "Request failed");
	}

	if (payload && payload.success === true) {
		return payload.data as T;
	}

	return payload as T;
}

async function refreshAccessToken(current: Session): Promise<Session | null> {
	const response = await fetch(`${API_ROOT}/token/refresh/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ refresh: current.refreshToken }),
	});

	if (!response.ok) {
		writeSession(null);
		return null;
	}

	const refreshed = (await response.json()) as { access: string; refresh: string };
	const nextSession = {
		...current,
		accessToken: refreshed.access,
		refreshToken: refreshed.refresh ?? current.refreshToken,
	};
	writeSession(nextSession);
	return nextSession;
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}) {
	const session = readSession();
	const headers = buildHeaders(options, session);
	const response = await fetch(`${API_ROOT}${path}`, {
		method: options.method ?? "GET",
		headers,
		body:
			options.json !== undefined
				? JSON.stringify(options.json)
				: options.body ?? null,
	});

	if (
		response.status === 401 &&
		options.auth !== false &&
		options.retry !== false &&
		session?.refreshToken
	) {
		const refreshed = await refreshAccessToken(session);
		if (refreshed) {
			return apiRequest<T>(path, { ...options, retry: false });
		}
	}

	return parseResponse<T>(response);
}

export async function login(payload: {
	email: string;
	password: string;
	remember_me: boolean;
}) {
	const data = await apiRequest<{
		access: string;
		refresh: string;
		user: User;
	}>("/users/login/remember-me", {
		method: "POST",
		auth: false,
		json: payload,
	});

	const session: Session = {
		accessToken: data.access,
		refreshToken: data.refresh,
		user: data.user,
	};
	writeSession(session);
	return session;
}

export async function loginWithGoogle(token: string) {
	const data = await apiRequest<{
		access: string;
		refresh: string;
		user: User;
	}>("/users/google", {
		method: "POST",
		auth: false,
		json: { token },
	});

	const session: Session = {
		accessToken: data.access,
		refreshToken: data.refresh,
		user: data.user,
	};
	writeSession(session);
	return session;
}

export async function register(payload: {
	email: string;
	username: string;
	password1: string;
	password2: string;
}) {
	const data = await apiRequest<{
		access: string;
		refresh: string;
		user: User;
	}>("/auth/registration/", {
		method: "POST",
		auth: false,
		json: payload,
	});

	const session: Session = {
		accessToken: data.access,
		refreshToken: data.refresh,
		user: data.user,
	};
	writeSession(session);
	return session;
}

export async function logout() {
	const session = readSession();
	if (session?.refreshToken) {
		try {
			await apiRequest("/users/logout", {
				method: "POST",
				json: { refresh: session.refreshToken },
			});
		} catch {
			// Keep logout resilient even if the backend token is already invalid.
		}
	}
	writeSession(null);
}

export async function fetchCurrentUser() {
	return apiRequest<User>("/users/me");
}

export async function fetchPlaylists() {
	return apiRequest<PlaylistSummary[]>("/playlists/");
}

export async function createPlaylist(payload: { title: string; description: string }) {
	return apiRequest<{ id: number; title: string }>("/playlists/", {
		method: "POST",
		json: payload,
	});
}

export async function updatePlaylist(
	playlistId: number,
	payload: { title?: string; description?: string; is_public?: boolean },
) {
	return apiRequest<{ id: number; title: string }>(`/playlists/${playlistId}`, {
		method: "PATCH",
		json: payload,
	});
}

export async function deletePlaylist(playlistId: number) {
	return apiRequest<void>(`/playlists/${playlistId}`, {
		method: "DELETE",
	});
}

export async function fetchPlaylist(playlistId: number) {
	return apiRequest<PlaylistDetail>(`/playlists/${playlistId}`);
}

export async function importSpotifyPlaylist(playlistId: string) {
	return apiRequest<ImportResult>("/playlists/spotify/import", {
		method: "POST",
		json: { playlist_id: playlistId },
		spotify: true,
	});
}

export async function fetchSpotifyPlaylists() {
	return apiRequest<SpotifyPlaylist[]>("/playlists/spotify/playlists", {
		spotify: true,
	});
}

export async function fetchSpotifyPlaylistTracks(playlistId: string) {
	return apiRequest<SpotifyPlaylistTrack[]>(`/playlists/spotify/playlists/${playlistId}`, {
		spotify: true,
	});
}

export async function importFile(
	kind: "csv" | "json",
	file: File,
	options?: { playlistId?: number; useSpotifyEnrichment?: boolean },
) {
	const formData = new FormData();
	formData.append("file", file);
	const params = new URLSearchParams();
	if (options?.playlistId) {
		params.set("playlist_id", String(options.playlistId));
	}
	if (options?.useSpotifyEnrichment) {
		params.set("use_spotify_enrichment", "true");
	}
	const query = params.size ? `?${params.toString()}` : "";

	return apiRequest<ImportResult>(`/imports/${kind}${query}`, {
		method: "POST",
		body: formData,
		spotify: options?.useSpotifyEnrichment === true,
	});
}

export async function organizePlaylist(playlistId: number, mode: string) {
	return apiRequest<OrganizedTrack[]>(`/playlists/${playlistId}/organize`, {
		method: "POST",
		json: { mode },
	});
}

export async function exportPlaylist(playlistId: number, name?: string) {
	return apiRequest<ExportResult>(`/playlists/${playlistId}/export`, {
		method: "POST",
		json: { name },
		spotify: true,
	});
}

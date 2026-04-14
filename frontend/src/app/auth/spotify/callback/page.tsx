"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import {
	readPostSpotifyRedirect,
	readSession,
	writePendingSpotifyRefreshToken,
	writePendingSpotifyToken,
	writePostSpotifyRedirect,
} from "@/lib/session-storage";
import type { Session } from "@/lib/types";

export default function SpotifyCallbackPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const { session, applySession, applySpotifyToken } = useAuth();
	const error = searchParams.get("error");
	const accessToken = searchParams.get("access_token");
	const refreshToken = searchParams.get("refresh_token");
	const spotifyToken = searchParams.get("spotify_token");
	const spotifyRefreshToken = searchParams.get("spotify_refresh_token");
	const email = searchParams.get("email");
	const username = searchParams.get("username");
	const name = searchParams.get("name");
	const handledRef = useRef(false);
	const existingSession = session ?? readSession();

	useEffect(() => {
		if (handledRef.current) {
			return;
		}

		if (error) {
			handledRef.current = true;
			window.setTimeout(() => {
				router.replace("/");
			}, 1800);
			return;
		}

		if (!accessToken) {
			handledRef.current = true;
			window.setTimeout(() => {
				router.replace("/");
			}, 1800);
			return;
		}

		handledRef.current = true;
		const redirectTarget = readPostSpotifyRedirect();
		writePostSpotifyRedirect(null);
		writePendingSpotifyToken(spotifyToken ?? null);
		writePendingSpotifyRefreshToken(spotifyRefreshToken ?? null);

		if (existingSession && spotifyToken) {
			applySession({
				...existingSession,
				spotifyToken,
				spotifyRefreshToken: spotifyRefreshToken ?? existingSession.spotifyRefreshToken,
			});
		} else if (refreshToken && spotifyToken && email && username) {
			const nextSession: Session = {
				accessToken,
				refreshToken,
				spotifyToken,
				spotifyRefreshToken: spotifyRefreshToken ?? undefined,
				user: {
					email,
					username,
					name: name || undefined,
				},
			};
			applySession(nextSession);
		} else {
			applySpotifyToken(spotifyToken ?? accessToken);
		}

		window.setTimeout(() => {
			router.replace(
				redirectTarget ||
					(refreshToken
						? "/account/dashboard"
						: existingSession
							? "/account/dashboard"
							: "/account/signIn"),
			);
		}, 900);
	}, [
		accessToken,
		applySession,
		applySpotifyToken,
		email,
		error,
		name,
		refreshToken,
		router,
		existingSession,
		session,
		spotifyRefreshToken,
		spotifyToken,
		username,
	]);

	const message = error
		? "Spotify connection failed."
		: !accessToken
			? "No Spotify token was returned."
			: refreshToken
				? "Spotify login complete. Sending you to your dashboard..."
				: "Spotify connected. Finishing setup...";

	return (
		<main className="auth-shell">
			<section className="auth-card">
				<div className="eyebrow">Spotify</div>
				<h1>{message}</h1>
				<p className="muted-copy">
					We&apos;re handing your Spotify connection back to MusicMixxer now.
				</p>
			</section>
		</main>
	);
}

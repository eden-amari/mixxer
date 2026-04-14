"use client";

import {
	createContext,
	startTransition,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
	type PropsWithChildren,
} from "react";
import {
	fetchCurrentUser,
	login,
	loginWithGoogle,
	logout,
	register,
} from "@/lib/api-client";
import {
	readPendingSpotifyRefreshToken,
	readPendingSpotifyToken,
	readSession,
	writePendingSpotifyRefreshToken,
	writePendingSpotifyToken,
	writeSession,
} from "@/lib/session-storage";
import type { Session } from "@/lib/types";

type AuthContextValue = {
	session: Session | null;
	isReady: boolean;
	setSpotifyToken: (token: string) => void;
	signIn: typeof login;
	signInWithGoogle: typeof loginWithGoogle;
	signUp: typeof register;
	signOut: () => Promise<void>;
	refreshUser: () => Promise<void>;
	applySpotifyToken: (token: string) => void;
	applySession: (session: Session) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
	const [session, setSession] = useState<Session | null>(null);
	const [isReady, setIsReady] = useState(false);
	const hydratedRef = useRef(false);

	useEffect(() => {
		if (hydratedRef.current) {
			return;
		}
		hydratedRef.current = true;

		const stored = readSession();
		const pendingSpotifyToken = readPendingSpotifyToken();
		const pendingSpotifyRefreshToken = readPendingSpotifyRefreshToken();
		const hydratedSession =
			stored && pendingSpotifyToken
				? {
						...stored,
						spotifyToken: pendingSpotifyToken,
						spotifyRefreshToken: pendingSpotifyRefreshToken ?? stored.spotifyRefreshToken,
					}
				: stored;

		startTransition(() => {
			setSession(hydratedSession);
			setIsReady(true);
		});

		if (hydratedSession?.spotifyToken) {
			writePendingSpotifyToken(null);
			writePendingSpotifyRefreshToken(null);
			writeSession(hydratedSession);
		}

		if (hydratedSession?.accessToken) {
			void fetchCurrentUser()
				.then((user) => {
					setSession((current) => {
						const base = current ?? hydratedSession;
						const next = { ...base, user };
						writeSession(next);
						return next;
					});
				})
				.catch(() => {
					writeSession(null);
					setSession(null);
				});
		}
	}, []);

	const setSpotifyToken = useCallback((token: string) => {
		setSession((current) => {
			if (!current) {
				writePendingSpotifyToken(token.trim());
				return current;
			}
			const next = { ...current, spotifyToken: token.trim() };
			writePendingSpotifyToken(null);
			writePendingSpotifyRefreshToken(null);
			writeSession(next);
			return next;
		});
	}, []);

	const applySpotifyToken = useCallback((token: string) => {
		setSession((current) => {
			if (!current) {
				writePendingSpotifyToken(token);
				return current;
			}
			const next = { ...current, spotifyToken: token };
			writePendingSpotifyToken(null);
			writePendingSpotifyRefreshToken(null);
			writeSession(next);
			return next;
		});
	}, []);

	const applySession = useCallback((next: Session) => {
		writePendingSpotifyToken(null);
		writePendingSpotifyRefreshToken(null);
		writeSession(next);
		setSession(next);
	}, []);

	const signIn = useCallback(async (payload: Parameters<typeof login>[0]) => {
		const next = await login(payload);
		const pendingSpotifyToken = readPendingSpotifyToken();
		const pendingSpotifyRefreshToken = readPendingSpotifyRefreshToken();
		const hydratedNext = pendingSpotifyToken
			? {
					...next,
					spotifyToken: pendingSpotifyToken,
					spotifyRefreshToken:
						pendingSpotifyRefreshToken ?? next.spotifyRefreshToken,
				}
			: next;
		writePendingSpotifyToken(null);
		writePendingSpotifyRefreshToken(null);
		writeSession(hydratedNext);
		setSession(hydratedNext);
		return hydratedNext;
	}, []);

	const signInWithGoogle = useCallback(
		async (token: Parameters<typeof loginWithGoogle>[0]) => {
			const next = await loginWithGoogle(token);
			const pendingSpotifyToken = readPendingSpotifyToken();
			const pendingSpotifyRefreshToken = readPendingSpotifyRefreshToken();
			const hydratedNext = pendingSpotifyToken
				? {
						...next,
						spotifyToken: pendingSpotifyToken,
						spotifyRefreshToken:
							pendingSpotifyRefreshToken ?? next.spotifyRefreshToken,
					}
				: next;
			writePendingSpotifyToken(null);
			writePendingSpotifyRefreshToken(null);
			writeSession(hydratedNext);
			setSession(hydratedNext);
			return hydratedNext;
		},
		[],
	);

	const signUp = useCallback(async (payload: Parameters<typeof register>[0]) => {
		const next = await register(payload);
		const pendingSpotifyToken = readPendingSpotifyToken();
		const pendingSpotifyRefreshToken = readPendingSpotifyRefreshToken();
		const hydratedNext = pendingSpotifyToken
			? {
					...next,
					spotifyToken: pendingSpotifyToken,
					spotifyRefreshToken:
						pendingSpotifyRefreshToken ?? next.spotifyRefreshToken,
				}
			: next;
		writePendingSpotifyToken(null);
		writePendingSpotifyRefreshToken(null);
		writeSession(hydratedNext);
		setSession(hydratedNext);
		return hydratedNext;
	}, []);

	const signOut = useCallback(async () => {
		await logout();
		setSession(null);
	}, []);

	const refreshUser = useCallback(async () => {
		const current = readSession();
		if (!current) {
			return;
		}
		const user = await fetchCurrentUser();
		const next = { ...current, user };
		writeSession(next);
		setSession(next);
	}, []);

	const value = useMemo<AuthContextValue>(
		() => ({
			session,
			isReady,
			setSpotifyToken,
			applySpotifyToken,
			applySession,
			signIn,
			signInWithGoogle,
			signUp,
			signOut,
			refreshUser,
		}),
		[
			applySession,
			applySpotifyToken,
			isReady,
			refreshUser,
			session,
			setSpotifyToken,
			signIn,
			signInWithGoogle,
			signOut,
			signUp,
		],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within AuthProvider");
	}
	return context;
}

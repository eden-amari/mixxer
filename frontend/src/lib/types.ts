export type User = {
	id?: number;
	pk?: number;
	email: string;
	username: string;
	name?: string;
	bio?: string;
};

export type Session = {
	accessToken: string;
	refreshToken: string;
	user: User;
	spotifyToken?: string;
	spotifyRefreshToken?: string;
};

export type PlaylistSummary = {
	id: number;
	title: string;
	is_public: boolean;
};

export type PlaylistTrack = {
	id: number | null;
	title: string | null;
	bpm: number | null;
	energy: number | null;
	valence: number | null;
};

export type PlaylistItem = {
	id: number;
	position: number;
	track: PlaylistTrack | null;
};

export type PlaylistDetail = {
	id: number;
	title: string;
	description: string;
	is_public: boolean;
	items: PlaylistItem[];
	enrichment?: {
		enrichable_tracks: number;
		enriched_tracks: number;
		pending_tracks: number;
		status: "complete" | "in_progress";
	};
};

export type SpotifyPlaylist = {
	id: string;
	name: string;
	tracks_count: number;
	image?: string | null;
};

export type SpotifyPlaylistTrack = {
	title: string | null;
	artist?: string | null;
	spotify_id?: string | null;
	album?: string | null;
	image?: string | null;
};

export type OrganizedTrack = {
	id: number;
	title: string;
	bpm: number | null;
	energy: number | null;
	valence: number | null;
};

export type ImportResult = {
	playlist_id: number;
	playlist_title?: string;
	total: number;
	success: number;
	failed: number;
	duplicates: number;
	queued_for_enrichment?: number;
	errors: Array<{ row: number; type: string; message: string }>;
};

export type ExportResult = {
	spotify_playlist_id: string;
	url?: string;
	tracks_added?: number;
	duplicates_skipped?: number;
	tracks_skipped_without_spotify_id?: number;
};

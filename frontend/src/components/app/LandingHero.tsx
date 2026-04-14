"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LandingAuthPanel } from "@/components/app/LandingAuthPanel";
import { useAuth } from "@/components/providers/AuthProvider";

type LandingHeroProps = {
	googleClientId: string;
};

const landingHighlights = [
	{
		title: "Spotify + files",
		description: "Bring in the playlists you already use.",
	},
	{
		title: "Flow-first sorting",
		description: "Tune pacing around the energy you want.",
	},
	{
		title: "Ready to export",
		description: "Keep your final version easy to share.",
	},
] as const;

const landingMetrics = [
	{ value: "Spotify", label: "Native import" },
	{ value: "CSV + JSON", label: "File support" },
	{ value: "Flow-first", label: "Sorting approach" },
] as const;

const workflowCards = [
	{
		kicker: "Import",
		title: "Pull in playlists from Spotify or files",
		description: "Start with the playlists you already have instead of rebuilding by hand.",
	},
	{
		kicker: "Organize",
		title: "Reorder by BPM, mood, or momentum",
		description: "Shape a sequence that feels smoother from the first track to the last.",
	},
	{
		kicker: "Export",
		title: "Send the polished version back out",
		description: "Keep the final pass ready for listening, sharing, or exporting.",
	},
] as const;

export function LandingHero({ googleClientId }: LandingHeroProps) {
	const router = useRouter();
	const { isReady, session } = useAuth();
	const [authOpen, setAuthOpen] = useState(false);
	const authShellRef = useRef<HTMLDivElement | null>(null);

	const routeThroughAuth = (destination: "/organizePlaylist/import" | "/account/dashboard") => {
		if (!isReady || !session) {
			setAuthOpen(true);
			return;
		}

		router.push(destination);
	};

	useEffect(() => {
		if (!authOpen) {
			return;
		}

		const handlePointerDown = (event: MouseEvent) => {
			if (!authShellRef.current?.contains(event.target as Node)) {
				setAuthOpen(false);
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setAuthOpen(false);
			}
		};

		document.addEventListener("mousedown", handlePointerDown);
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("mousedown", handlePointerDown);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [authOpen]);

	return (
		<section className="hero-card landing-hero landing-hero-minimal">
			<div className="landing-topbar">
				<Link className="landing-brand-lockup" href="/">
					<span className="landing-brand-mark">MM</span>
					<span className="landing-brand-text">
						<strong>MusicMixxer</strong>
						<small>Playlist organization that feels intentional</small>
					</span>
				</Link>

				<div className="landing-auth-shell" ref={authShellRef}>
					<button
						aria-controls="landing-auth-panel"
						aria-expanded={authOpen}
						className={authOpen ? "landing-signin-trigger active" : "landing-signin-trigger"}
						type="button"
						onClick={() => setAuthOpen((current) => !current)}
					>
						{authOpen ? "Close" : "Sign in"}
					</button>
					<div className={authOpen ? "landing-auth-popover open" : "landing-auth-popover"}>
						<LandingAuthPanel googleClientId={googleClientId} isOpen={authOpen} />
					</div>
				</div>
			</div>

			<div className="landing-stage">
				<div className="landing-stage-grid">
					<div className="landing-intro landing-intro-minimal">
						<div className="eyebrow">MusicMixxer</div>
						<h1>Build better playlists in one clean workflow.</h1>
						<p className="hero-copy">
							Import playlists, reshape the order, and export a stronger sequence
							without bouncing between tabs, files, and tools.
						</p>
						<div className="landing-inline-actions">
							<button
								className="primary-button"
								type="button"
								onClick={() => routeThroughAuth("/organizePlaylist/import")}
							>
								Start organizing
							</button>
							<button
								className="ghost-button"
								type="button"
								onClick={() => routeThroughAuth("/account/dashboard")}
							>
								Create account
							</button>
						</div>
						<div className="landing-metric-row" aria-label="Key product metrics">
							{landingMetrics.map((metric) => (
								<div className="landing-metric-card" key={metric.label}>
									<strong>{metric.value}</strong>
									<span>{metric.label}</span>
								</div>
							))}
						</div>
					</div>

					<div className="landing-showcase">
						<div className="landing-showcase-panel">
							<div className="landing-showcase-header">
								<div>
									<div className="eyebrow landing-panel-eyebrow">Why it works</div>
									<h2>A tighter workflow for playlist people.</h2>
								</div>
								<div className="landing-showcase-chip"></div>
							</div>

							<div className="landing-showcase-grid">
								{workflowCards.map((card) => (
									<article className="landing-showcase-card" key={card.title}>
										<div className="landing-showcase-kicker">{card.kicker}</div>
										<strong>{card.title}</strong>
										<p>{card.description}</p>
									</article>
								))}
							</div>

							<div className="landing-showcase-footer">
								<div className="landing-assurance">
									<strong>Less friction</strong>
									<span>One place to import, sort, and finish the playlist.</span>
								</div>
								<div className="landing-assurance">
									<strong>Cleaner output</strong>
									<span>Focus on pacing, transitions, and energy instead of file wrangling.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="landing-highlight-row" aria-label="Product highlights">
				{landingHighlights.map((highlight) => (
					<div className="landing-highlight-card" key={highlight.title}>
						<strong>{highlight.title}</strong>
						<span>{highlight.description}</span>
					</div>
				))}
			</div>
		</section>
	);
}

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";

const navItems = [
	{ href: "/account/dashboard", label: "Dashboard" },
	{ href: "/organizePlaylist/import", label: "Import" },
	{ href: "/organizePlaylist/export", label: "Export" },
];

export function AppHeader() {
	const pathname = usePathname();
	const router = useRouter();
	const { session, signOut } = useAuth();

	return (
		<header className="app-header">
			<Link className="brand-lockup" href="/">
				<span className="brand-mark">MM</span>
				<span>
					<strong>MusicMixxer</strong>
					<small>Stateless playlist workflow</small>
				</span>
			</Link>
			<nav className="app-nav" aria-label="Primary">
				{navItems.map((item) => (
					<Link
						key={item.href}
						className={pathname === item.href ? "nav-link active" : "nav-link"}
						href={item.href}
					>
						{item.label}
					</Link>
				))}
			</nav>
			<div className="header-actions">
				{session ? (
					<>
						<div className="user-chip">
							<span>{session.user.username}</span>
							<small>{session.user.email}</small>
						</div>
						<button
							className="secondary-button"
							type="button"
							onClick={async () => {
								await signOut();
								router.push("/account/signIn");
							}}
						>
							Sign out
						</button>
					</>
				) : (
					<>
						<Link className="ghost-button" href="/account/signIn">
							Sign in
						</Link>
						<Link className="primary-button" href="/account/signUp">
							Create account
						</Link>
					</>
				)}
			</div>
		</header>
	);
}

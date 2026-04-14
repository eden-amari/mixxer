"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";

export default function SignInPage() {
	const router = useRouter();
	const { signIn } = useAuth();
	const [form, setForm] = useState({
		email: "",
		password: "",
		remember_me: true,
	});
	const [error, setError] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	return (
		<main className="auth-shell">
			<form
				className="auth-card"
				onSubmit={(event) => {
					event.preventDefault();
					setIsSubmitting(true);
					setError(null);
					void signIn(form)
						.then(() => router.push("/account/dashboard"))
						.catch((nextError) => {
							setError(
								nextError instanceof Error ? nextError.message : "Unable to sign in.",
							);
						})
						.finally(() => setIsSubmitting(false));
				}}
			>
				<div className="eyebrow">Welcome back</div>
				<h1>Sign in to MusicMixxer</h1>
				<p className="muted-copy">
					Use your MusicMixxer account to access your personalized dashboard, manage your connected services, and more.
				</p>
				<label className="field">
					<span>Email</span>
					<input
						required
						type="email"
						value={form.email}
						onChange={(event) =>
							setForm((current) => ({ ...current, email: event.target.value }))
						}
						placeholder="you@example.com"
					/>
				</label>
				<label className="field">
					<span>Password</span>
					<input
						required
						type="password"
						value={form.password}
						onChange={(event) =>
							setForm((current) => ({ ...current, password: event.target.value }))
						}
						placeholder="••••••••"
					/>
				</label>
				<label className="checkbox-row">
					<input
						type="checkbox"
						checked={form.remember_me}
						onChange={(event) =>
							setForm((current) => ({
								...current,
								remember_me: event.target.checked,
							}))
						}
					/>
					<span>Keep me signed in on this browser</span>
				</label>
				{error ? <div className="notice error">{error}</div> : null}
				<button className="primary-button" disabled={isSubmitting} type="submit">
					{isSubmitting ? "Signing in..." : "Sign in"}
				</button>
				<div className="auth-footer">
					<Link href="/account/signUp">Create an account</Link>
					<Link href="/">Back home</Link>
				</div>
			</form>
		</main>
	);
}

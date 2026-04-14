"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";

export default function SignUpPage() {
	const router = useRouter();
	const { signUp } = useAuth();
	const [form, setForm] = useState({
		username: "",
		email: "",
		password1: "",
		password2: "",
	});
	const [error, setError] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	return (
		<main className="auth-shell">
			<form
				className="auth-card"
				onSubmit={(event) => {
					event.preventDefault();
					if (form.password1 !== form.password2) {
						setError("Passwords do not match.");
						return;
					}
					setIsSubmitting(true);
					setError(null);
					void signUp(form)
						.then(() => router.push("/account/dashboard"))
						.catch((nextError) => {
							setError(
								nextError instanceof Error ? nextError.message : "Unable to create account.",
							);
						})
						.finally(() => setIsSubmitting(false));
				}}
			>
				<div className="eyebrow">New account</div>
				<h1>Create your workspace</h1>
				<p className="muted-copy">
					Use your MusicMixxer account to access your personalized dashboard, manage your connected services, and more.
				</p>
				<label className="field">
					<span>Username</span>
					<input
						required
						value={form.username}
						onChange={(event) =>
							setForm((current) => ({ ...current, username: event.target.value }))
						}
						placeholder="mixmaster"
					/>
				</label>
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
						value={form.password1}
						onChange={(event) =>
							setForm((current) => ({ ...current, password1: event.target.value }))
						}
					/>
				</label>
				<label className="field">
					<span>Confirm password</span>
					<input
						required
						type="password"
						value={form.password2}
						onChange={(event) =>
							setForm((current) => ({ ...current, password2: event.target.value }))
						}
					/>
				</label>
				{error ? <div className="notice error">{error}</div> : null}
				<button className="primary-button" disabled={isSubmitting} type="submit">
					{isSubmitting ? "Creating account..." : "Create account"}
				</button>
				<div className="auth-footer">
					<Link href="/account/signIn">Already have an account?</Link>
					<Link href="/">Back home</Link>
				</div>
			</form>
		</main>
	);
}

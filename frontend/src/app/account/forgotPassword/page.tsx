import Link from "next/link";

export default function ForgotPasswordPage() {
	return (
		<main className="auth-shell">
			<section className="auth-card">
				<div className="eyebrow">Password reset</div>
				<h1>Reset flow not wired yet</h1>
				<p className="muted-copy">
					The backend in this repo does not expose a password-reset endpoint yet,
					so this screen is informational for now. Sign in with an existing test
					account or create a new one to continue the integrated flow.
				</p>
				<div className="auth-footer">
					<Link href="/account/signIn">Go to sign in</Link>
					<Link href="/account/signUp">Create account</Link>
				</div>
			</section>
		</main>
	);
}

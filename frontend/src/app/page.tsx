import Script from "next/script";
import { LandingHero } from "@/components/app/LandingHero";

export default function HomePage() {
	const googleClientId =
		process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
		process.env.GOOGLE_CLIENT_ID ||
		"421993453424-66jggd7q06vact4iisafpiu5ajjpnf0s.apps.googleusercontent.com";

	return (
		<main className="page-shell landing-shell">
			<Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />
			<LandingHero googleClientId={googleClientId} />
		</main>
	);
}

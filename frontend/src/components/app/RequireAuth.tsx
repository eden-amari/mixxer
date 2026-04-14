"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";

export function RequireAuth({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const { isReady, session } = useAuth();

	useEffect(() => {
		if (isReady && !session) {
			router.replace("/account/signIn");
		}
	}, [isReady, router, session]);

	if (!isReady || !session) {
		return <div className="panel muted-panel">Loading your workspace...</div>;
	}

	return <>{children}</>;
}

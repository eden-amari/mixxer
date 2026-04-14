import { AppHeader } from "@/components/app/AppHeader";
import { RequireAuth } from "@/components/app/RequireAuth";
import { WorkspaceClient } from "@/components/app/WorkspaceClient";

export default function ImportPage() {
	return (
		<main className="page-shell">
			<AppHeader />
			<RequireAuth>
				<WorkspaceClient initialSection="import" />
			</RequireAuth>
		</main>
	);
}

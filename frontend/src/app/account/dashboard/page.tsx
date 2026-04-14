import { AppHeader } from "@/components/app/AppHeader";
import { RequireAuth } from "@/components/app/RequireAuth";
import { WorkspaceClient } from "@/components/app/WorkspaceClient";

export default function DashboardPage() {
	return (
		<main className="page-shell">
			<AppHeader />
			<RequireAuth>
				<WorkspaceClient initialSection="dashboard" />
			</RequireAuth>
		</main>
	);
}

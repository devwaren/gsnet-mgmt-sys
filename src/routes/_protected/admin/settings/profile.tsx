import { createFileRoute } from "@tanstack/react-router";
import { AdminProfilesPage } from "#/features/admin/settings/profile";

export const Route = createFileRoute("/_protected/admin/settings/profile")({
	component: RouteComponent,
});

function RouteComponent() {
	return <AdminProfilesPage />;
}

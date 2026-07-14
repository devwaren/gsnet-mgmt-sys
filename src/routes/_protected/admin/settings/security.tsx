import { createFileRoute } from "@tanstack/react-router";
import { AdminSecurityPage } from "#/features/admin/settings/security";

export const Route = createFileRoute("/_protected/admin/settings/security")({
	component: RouteComponent,
});

function RouteComponent() {
	return <AdminSecurityPage />;
}

import { createFileRoute } from "@tanstack/react-router";
import { AdminSettingsPage } from "#/features/admin";

export const Route = createFileRoute("/_protected/admin/settings/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <AdminSettingsPage />;
}

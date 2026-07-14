import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboardPage } from "#/features/admin/index.ts";

export const Route = createFileRoute("/_protected/admin/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <AdminDashboardPage />;
}

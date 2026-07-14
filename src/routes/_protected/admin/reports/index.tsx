import { createFileRoute } from "@tanstack/react-router";
import { AdminReportPage } from "#/features/admin";

export const Route = createFileRoute("/_protected/admin/reports/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <AdminReportPage />;
}

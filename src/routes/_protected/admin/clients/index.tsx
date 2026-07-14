import { createFileRoute } from "@tanstack/react-router";
import { AdminClientsPage } from "#/features/admin";

export const Route = createFileRoute("/_protected/admin/clients/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <AdminClientsPage />;
}

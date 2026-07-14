import { createFileRoute } from "@tanstack/react-router";
import { AdminBillingPage } from "#/features/admin/billing";

export const Route = createFileRoute("/_protected/admin/billing/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <AdminBillingPage />;
}

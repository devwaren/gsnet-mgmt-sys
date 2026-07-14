import { createFileRoute } from "@tanstack/react-router";
import { AdminUsersPage } from "#/features/admin/index.ts";

export const Route = createFileRoute("/_protected/admin/users/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <AdminUsersPage />;
}

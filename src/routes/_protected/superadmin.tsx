import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/superadmin")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}

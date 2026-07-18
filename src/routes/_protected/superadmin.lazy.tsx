import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_protected/superadmin")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}

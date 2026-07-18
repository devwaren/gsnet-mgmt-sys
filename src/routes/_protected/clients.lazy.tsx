import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_protected/clients")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}

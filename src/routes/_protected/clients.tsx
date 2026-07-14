import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/clients")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}

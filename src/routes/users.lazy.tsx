import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/users")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}

import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/users/$id")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}

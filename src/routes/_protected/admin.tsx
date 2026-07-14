import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "#/shared/components/index.tsx";

export const Route = createFileRoute("/_protected/admin")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main>
			<Navbar />
			<Outlet />
		</main>
	);
}

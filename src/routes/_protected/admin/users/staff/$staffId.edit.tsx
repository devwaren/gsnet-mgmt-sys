import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/_protected/admin/users/staff/$staffId/edit",
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_protected/admin/users/staff/@staffId/edit"!</div>;
}

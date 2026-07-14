import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/clients/notification")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_protected/client/notification"!</div>;
}

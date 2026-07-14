import { createFileRoute, Navigate } from "@tanstack/react-router";
import { authClient } from "#/lib/client/sdk/better-auth";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const { data: session, isPending } = authClient.useSession();

	if (isPending) {
		return (
			<div className="h-8 w-8 bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
		);
	}

	if (!session) {
		return <Navigate to="/login" />;
	}

	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
			<p className="mt-4 text-lg">
				Edit <code>src/routes/index.tsx</code> to get started.
			</p>
		</div>
	);
}

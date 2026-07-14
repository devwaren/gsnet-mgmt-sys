import { createFileRoute } from "@tanstack/react-router";
import { user } from "#/lib/server/services/user.service";

export const Route = createFileRoute("/api/v1/auth/forgot-password")({
	server: {
		handlers: {
			POST: async ({ request }) => await user.handler(request),
		},
	},
});

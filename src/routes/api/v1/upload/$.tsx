import { createFileRoute } from "@tanstack/react-router";
import { image } from "#/lib/server/sdk/cloudinary";

export const Route = createFileRoute("/api/v1/upload/$")({
	server: {
		handlers: {
			POST: ({ request }) => image.upload(request),
			DELETE: ({ request }) => image.destroy(request),
		},
	},
});

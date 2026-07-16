import { redirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";

import { auth } from "../sdk/better-auth";

const publicMiddleware = createMiddleware().server(
	async ({ next, request }) => {
		const session = await auth.api.getSession({
			headers: request.headers,
		});

		if (!session) {
			return next();
		}

		const pathname = new URL(request.url).pathname;

		let destination = "/clients";

		if (!session.user.emailVerified) {
			destination = `/verify-email/${session.session.token}`;
		} else if (session.user.role === "admin") {
			destination = "/admin";
		}

		if (pathname !== destination) {
			throw redirect({ to: destination });
		}

		return next();
	},
);

export { publicMiddleware };

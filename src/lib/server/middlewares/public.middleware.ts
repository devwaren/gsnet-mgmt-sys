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

		if (!session.user.emailVerified) {
			if (!pathname.startsWith("/verify-email/")) {
				throw redirect({
					to: "/verify-email/$hash",
					params: {
						hash: session.session.token,
					},
				});
			}

			return next();
		}

		if (session.user.role === "admin") {
			if (pathname !== "/admin") {
				throw redirect({ to: "/admin" });
			}

			return next();
		}

		if (pathname !== "/clients") {
			throw redirect({ to: "/clients" });
		}

		return next();
	},
);

export { publicMiddleware };

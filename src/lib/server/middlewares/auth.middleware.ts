import { redirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";

import { auth } from "../sdk/better-auth";

const authMiddleware = createMiddleware().server(async ({ next, request }) => {
	const session = await auth.api.getSession({
		headers: request.headers,
	});

	if (!session) {
		throw redirect({ to: "/login" });
	}

	const pathname = new URL(request.url).pathname;

	if (!session.user.emailVerified) {
		const destination = `/verify-email/${session.session.token}`;

		if (pathname !== destination) {
			throw redirect({
				to: "/verify-email/$hash",
				params: {
					hash: session.session.token,
				},
			});
		}

		return next();
	}

	if (session.user.twoFactorEnabled) {
		const destination = `/two-factor/${session.session.token}`;

		if (pathname !== destination) {
			throw redirect({
				to: "/two-factor/$hash",
				params: {
					hash: session.session.token,
				},
			});
		}

		return next();
	}

	return next();
});

export { authMiddleware };

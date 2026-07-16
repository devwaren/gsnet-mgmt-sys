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

	if (!session.user.emailVerified) {
		const pathname = new URL(request.url).pathname;
		const destination = `/verify-email/${session.session.token}`;

		if (pathname !== destination) {
			throw redirect({
				to: "/verify-email/$hash",
				params: {
					hash: session.session.token,
				},
			});
		}
	}

	if (session.user.twoFactorEnabled) {
		throw redirect({
			to: "/two-factor/$hash",
			params: {
				hash: session.session.token,
			},
		});
	}

	return next();
});

export { authMiddleware };

import { redirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";

import { auth } from "../sdk/better-auth";

const publicMiddleware = createMiddleware().server(
	async ({ next, request }) => {
		const session = await auth.api.getSession({ headers: request.headers });
		if (session) {
			switch (true) {
				case session.user.role === "admin":
					throw redirect({ to: "/admin" });
				default:
					throw redirect({ to: "/clients" });
			}
		}
		return await next();
	},
);

export { publicMiddleware };

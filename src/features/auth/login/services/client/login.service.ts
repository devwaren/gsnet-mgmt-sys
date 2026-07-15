import type { User } from "better-auth";

import { authClient } from "#/lib/client/sdk/better-auth";
import type { auth } from "#/lib/server";

type LoginEmail = {
	email: string;
	password: string;
};

type UserExtend = User & typeof auth.$Infer.Session.user;

const loginService = async (data: LoginEmail) => {
	const result = await authClient.signIn.email({
		email: data.email,
		password: data.password,
	});

	if (result.error) {
		throw new Error(result.error.message);
	}

	return {
		...result.data,
		user: result.data.user as UserExtend,
	};
};

export { loginService };

import { authClient } from "#/lib/client/sdk/better-auth";

type LoginEmail = {
	email: string;
	password: string;
};

const loginService = async (data: LoginEmail) => {
	const result = await authClient.signIn.email({
		email: data.email,
		password: data.password,
	});

	if (result.error) {
		throw new Error(result.error.message);
	}

	return result.data;
};

export { loginService };

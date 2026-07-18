import { authClient } from "#/lib/client/sdk/better-auth";
import type { RegisterServiceParameter } from "../../types";

export const registerEntryServices = async (data: RegisterServiceParameter) => {
	const { firstName, lastName, pppId, email, password, avatar } = data;

	if (!firstName || !lastName || !pppId || !email || !password) {
		throw new Error("Missing required registration fields.");
	}

	const payload = {
		firstName,
		lastName,
		pppId,
		name: `${firstName} ${lastName}`,
		email,
		password,
		image: avatar,
	};

	const response = await fetch(
		`/api/v1/ppp/${encodeURIComponent(pppId)}/validate/${encodeURIComponent(email)}`,
	);

	if (!response.ok) {
		const { message } = await response.json();
		throw new Error(message ?? "Invalid PPP ID.");
	}

	return authClient.signUp.email(payload);
};

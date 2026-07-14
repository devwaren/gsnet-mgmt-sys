import { authClient } from "#/lib/client/sdk/better-auth";
import type { RegisterServiceParameter } from "../../types";

export const registerEntryServices = (data: RegisterServiceParameter) => {
	const payload = {
		firstName: `${data.firstName}`,
		lastName: `${data.lastName}`,
		pppId: `${data.pppId}`,
		name: `${data.firstName} ${data.lastName}`,
		email: `${data.email}`,
		password: `${data.password}`,
		image: `${data.avatar}`,
	} as const;

	return authClient.signUp.email({
		...payload,
	});
};

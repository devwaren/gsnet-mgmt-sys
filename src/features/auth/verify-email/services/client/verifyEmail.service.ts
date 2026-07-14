import { authClient } from "#/lib/client/sdk/better-auth";
import type { VerifyEmailServiceParams } from "../types";

export const verifyEmailService = async ({
	email,
	otp,
}: VerifyEmailServiceParams) => {
	const result = await authClient.emailOtp.verifyEmail({
		email,
		otp,
	});

	if (result.data && !result.error) {
		sessionStorage.removeItem(
			`verify-email-sent:${email.trim().toLowerCase()}`,
		);
	}

	return result;
};

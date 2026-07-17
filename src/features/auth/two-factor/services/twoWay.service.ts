import { authClient } from "#/lib/client/sdk/better-auth";

interface VerifyTwoWayEmailPayload {
	code: string;
}

const twoWayEmailService = async ({ code }: VerifyTwoWayEmailPayload) => {
	return authClient.twoFactor.verifyOtp({
		code,
	});
};

export { twoWayEmailService };

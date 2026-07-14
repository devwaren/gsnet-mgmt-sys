import { authClient } from "#/lib/client/sdk/better-auth";

type ForgotPasswordServiceParams = {
	email: string;
	pppId: string;
};

type ForgotPasswordResponse = {
	status: boolean;
	message: string;
};

export const forgotPasswordService = async ({
	email,
	pppId,
}: ForgotPasswordServiceParams): Promise<ForgotPasswordResponse> => {
	const result = await authClient.$fetch<ForgotPasswordResponse>(
		"/forgot-password",
		{
			method: "POST",
			body: {
				email,
				pppId,
			},
		},
	);

	if (result.error) {
		throw new Error(result.error.message);
	}

	return result.data;
};

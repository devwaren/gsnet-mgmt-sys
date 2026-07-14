import { toast } from "react-hot-toast";
import { authClient } from "#/lib/client/sdk/better-auth";

type ResendVerificationCodeServiceParams = {
	email: string;
};

export const resendVerificationCodeService = ({
	email,
}: ResendVerificationCodeServiceParams) => {
	return toast.promise(
		authClient.emailOtp.sendVerificationOtp({
			email,
			type: "email-verification",
		}),
		{
			loading: "Sending verification code...",
			success: "Verification code sent successfully.",
			error: "Failed to send verification code.",
		},
	);
};

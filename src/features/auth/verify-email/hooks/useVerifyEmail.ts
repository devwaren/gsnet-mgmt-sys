import { authClient } from "#/lib/client/sdk/better-auth/index.ts";
import { useAutoResendCode } from "./useAutoResendCode.entry";
import { useVerifyEmailForm } from "./useVerifyEmail.form";

export const useVerifyEmail = () => {
	const { data: session } = authClient.useSession();

	const user = session?.user;
	const email = user?.email ?? "";

	const form = useVerifyEmailForm(email);
	useAutoResendCode(email);

	return { form, email };
};

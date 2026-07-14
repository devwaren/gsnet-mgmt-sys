import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { authClient } from "#/lib/client/sdk/better-auth";
import { resendVerificationCodeService } from "../services/client";

const useAutoResendCode = (email: string) => {
	const navigate = useNavigate();
	const { data: session, isPending } = authClient.useSession();

	const { mutateAsync, ...mutation } = useMutation({
		mutationKey: ["resend-verification-code", email],
		mutationFn: () => resendVerificationCodeService({ email }),
	});

	useEffect(() => {
		if (isPending) return;

		if (session?.user.emailVerified) {
			navigate({ to: "/admin" });
			return;
		}

		if (!email) return;

		const key = `verify-email-sent:${email.trim().toLowerCase()}`;

		if (sessionStorage.getItem(key)) {
			return;
		}

		sessionStorage.setItem(key, "true");

		void mutateAsync();
	}, [email, session, isPending, mutateAsync, navigate]);

	return { mutateAsync, ...mutation };
};

export { useAutoResendCode };

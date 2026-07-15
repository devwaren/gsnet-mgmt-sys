import { useState } from "react";
import { toast } from "react-hot-toast";

import { resendVerificationCodeService } from "../services/client";

const useResendCode = (email: string) => {
	const [isPending, setIsPending] = useState(false);

	const resend = async () => {
		setIsPending(true);

		try {
			const result = await resendVerificationCodeService({
				email,
			});

			toast.success("Verification code sent successfully.");

			return result;
		} catch (error) {
			toast.error("Failed to send verification code.");
			throw error;
		} finally {
			setIsPending(false);
		}
	};

	return {
		resend,
		isPending,
	};
};

export { useResendCode };

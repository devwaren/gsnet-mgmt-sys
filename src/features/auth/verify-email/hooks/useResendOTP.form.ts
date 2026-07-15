import { useFormSettings } from "@dev-waren/react-form-kit";
import { z } from "zod/v3";

import { resendVerificationCodeService } from "../services/client";

const useResendOTPForm = (email: string) => {
	const handleSubmit = async () => {
		await resendVerificationCodeService({ email });
	};

	return useFormSettings({
		schema: z.object({}),
		defaultValues: {},
		onSubmit: handleSubmit,
	});
};

export { useResendOTPForm };

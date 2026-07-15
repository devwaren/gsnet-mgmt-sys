import { useFormSettings } from "@dev-waren/react-form-kit";

import type { HandleResetPassword } from "../types";
import { resetPasswordSchema } from "../validation";

const handleResetPasswordSubmit: HandleResetPassword = async (data) => {
	console.log(`Submitted new password: `, data);
};

const useResetPasswordForm = () =>
	useFormSettings({
		schema: resetPasswordSchema,
		defaultValues: {
			password: "",
		},
		ignoreFields: ["confirmPassword"],
		clearFields: ["password", "confirmPassword"],
		onSubmit: handleResetPasswordSubmit,
	});

export { useResetPasswordForm };

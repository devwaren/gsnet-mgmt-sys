import { useFormSettings } from "@dev-waren/react-form-kit";
import { forgotPasswordSchema } from "../validation";
import { useForgotPasswordEntry } from "./useForgotPasswordEntry";

const useForgotPasswordForm = () => {
	const mutation = useForgotPasswordEntry();

	return useFormSettings({
		schema: forgotPasswordSchema,
		defaultValues: {
			pppId: "",
			email: "",
		},
		clearFields: ["email", "pppId"],
		onSubmit: (data) => mutation.mutateAsync(data),
	});
};

export { useForgotPasswordForm };

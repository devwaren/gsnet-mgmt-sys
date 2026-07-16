import { useFormSettings } from "@dev-waren/react-form-kit";

import { loginSchema } from "../validation";
import { useLoginEntry } from "./useLogin.entry";

const useLoginForm = () => {
	const mutation = useLoginEntry();
	const isLoading = mutation.isPending;

	const form = useFormSettings({
		schema: loginSchema,
		defaultValues: {
			email: "",
			password: "",
		},
		clearFields: ["email", "password"],
		onSubmit: (data) => mutation.mutateAsync(data),
	});

	return { form, isLoading };
};

export { useLoginForm };

import { useFormSettings } from "@dev-waren/react-form-kit";

import { loginSchema } from "../validation";
import { useLoginEntry } from "./useLoginEntry";

const useLoginForm = () => {
	const mutation = useLoginEntry();

	return useFormSettings({
		schema: loginSchema,
		defaultValues: {
			email: "",
			password: "",
		},
		clearFields: ["email", "password"],
		onSubmit: (data) => mutation.mutateAsync(data),
	});
};

export { useLoginForm };

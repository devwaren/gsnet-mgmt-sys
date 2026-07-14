import { useFormSettings } from "@dev-waren/react-form-kit";
import { verifyEmailSchema } from "../validation";
import { useVerifyEmailEntry } from "./useVerifyEmailEntry";

const useVerifyEmailForm = (email: string) => {
	const mutation = useVerifyEmailEntry();

	const handleSubmit = async ({ code }: { code: string }) => {
		return mutation.mutateAsync({
			email,
			otp: code,
		});
	};

	return useFormSettings({
		schema: verifyEmailSchema,
		defaultValues: {
			code: "",
		},
		clearFields: ["code"],
		onSubmit: handleSubmit,
	});
};

export { useVerifyEmailForm };

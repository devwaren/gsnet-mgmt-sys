import { useFormSettings } from "@dev-waren/react-form-kit";

import { verifyTwoWayEmailSchema } from "../validation";
import { useTwoWayVerificationEntry } from "./useTwoWayVerification.entry";

const useTwoWayVerificationForm = () => {
	const mutation = useTwoWayVerificationEntry();
	const isPending = mutation.isPending;

	const form = useFormSettings({
		schema: verifyTwoWayEmailSchema,
		defaultValues: {
			code: "",
		},
		clearFields: ["code"],
		onSubmit: (data) => mutation.mutateAsync(data),
	});

	return { form, isPending };
};

export { useTwoWayVerificationForm };

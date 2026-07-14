import { useFormSettings } from "@dev-waren/react-form-kit";
import type { HandleTwoWayVerificationSchema } from "../types";
import { verifyTwoWayEmailSchema } from "../validation";

const handleTwoWaySubmit: HandleTwoWayVerificationSchema = async (data) => {
	console.log(`Submitted Two-way verification code :`, data);
};

const useTwoWayVerificationForm = () =>
	useFormSettings({
		schema: verifyTwoWayEmailSchema,
		defaultValues: {
			code: "",
		},
		clearFields: ["code"],
		onSubmit: handleTwoWaySubmit,
	});

export { useTwoWayVerificationForm };

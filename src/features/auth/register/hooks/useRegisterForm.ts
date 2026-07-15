import { useFormSettings } from "@dev-waren/react-form-kit";

import { deleteImageService } from "#/lib/client/sdk/cloudinary";
import { clearFields, defaultValues } from "../constants";
import { avatarUploadService } from "../services";
import type { HandleRegisterSubmit } from "../types";
import { registerSchema } from "../validation";
import { useRegisterEntry } from "./useRegisterEntry";

const useRegisterForm = () => {
	const mutation = useRegisterEntry();

	const handleSubmit: HandleRegisterSubmit = async (data) => {
		let publicId = "";

		try {
			const { payload, publicId: uploadedPublicId } =
				await avatarUploadService(data);

			publicId = uploadedPublicId;

			await mutation.mutateAsync(payload);
		} catch (error) {
			if (publicId) {
				await deleteImageService(publicId);
			}
			throw error;
		}
	};

	return useFormSettings({
		schema: registerSchema,
		defaultValues,
		ignoreFields: ["confirmPassword"],
		clearFields,
		onSubmit: handleSubmit,
	});
};

export { useRegisterForm };

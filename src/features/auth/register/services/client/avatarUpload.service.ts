import { uploadImageService } from "#/lib/client/sdk/cloudinary";
import type { RegisterData } from "../../types";

const avatarUploadService = async (data: RegisterData) => {
	const upload = await uploadImageService(data.preview);

	const {
		preview: _preview,
		confirmPassword: _confirmPassword,
		...payload
	} = data;

	return {
		publicId: upload.publicId,
		payload: {
			...payload,
			avatar: upload.url,
		},
	};
};

export { avatarUploadService };

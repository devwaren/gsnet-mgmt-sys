import type { UploadApiResponse } from "cloudinary";
import { cloudinary } from "../config";
import type { UploadImageOptions, UploadImageResult } from "../types";

export async function uploadImage({
	file,
	folder = "avatars",
	publicId,
}: UploadImageOptions): Promise<UploadImageResult> {
	if (!file.type.startsWith("image/")) {
		throw new Error("Only image files are allowed.");
	}

	const buffer = Buffer.from(await file.arrayBuffer());

	const result = await new Promise<UploadApiResponse>((resolve, reject) => {
		cloudinary.uploader
			.upload_stream(
				{
					folder,
					public_id: publicId,
					resource_type: "image",
					transformation: [
						{
							width: 512,
							height: 512,
							crop: "fill",
							gravity: "face",
							format: "webp",
						},
					],
				},
				(error, uploadResult) => {
					if (error) {
						return reject(error);
					}

					if (!uploadResult) {
						return reject(new Error("Cloudinary upload failed."));
					}

					resolve(uploadResult);
				},
			)
			.end(buffer);
	});

	return {
		url: result.secure_url,
		publicId: result.public_id,
	};
}

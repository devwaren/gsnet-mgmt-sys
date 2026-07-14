import { createClientOnlyFn } from "@tanstack/react-start";
import { api } from "#/lib/client/http";
import type { UploadImageResponse } from "../types";

export const uploadImageService = createClientOnlyFn(async (file: File) => {
	const formData = new FormData();

	formData.append("file", file);

	const { data } = await api.post<UploadImageResponse>(
		"/api/v1/upload/image",
		formData,
	);

	return data;
});

export const deleteImageService = createClientOnlyFn(
	async (publicId: string) => {
		await api.delete("/api/v1/upload/image", {
			data: {
				publicId,
			},
		});
	},
);

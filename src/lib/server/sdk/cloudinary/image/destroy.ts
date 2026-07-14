import { createServerFn } from "@tanstack/react-start";
import { cloudinary } from "../config";

export const destroyImage = createServerFn({
	method: "POST",
})
	.validator((data: { publicId: string }) => data)
	.handler(async ({ data }) => {
		const result = await cloudinary.uploader.destroy(data.publicId);

		if (result.result !== "ok" && result.result !== "not found") {
			throw new Error(`Failed to destroy image: ${result.result}`);
		}
	});

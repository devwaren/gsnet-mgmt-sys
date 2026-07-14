import { destroyImage, uploadImage } from "#/lib/server/sdk/cloudinary";

const getFile = async (request: Request): Promise<File> => {
	const formData = await request.formData();

	const file = formData.get("file");

	if (!(file instanceof File)) {
		throw new Response(
			JSON.stringify({
				message: "No file uploaded.",
			}),
			{
				status: 400,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}

	return file;
};

const getPublicId = async (request: Request): Promise<string> => {
	const { publicId } = (await request.json()) as {
		publicId?: string;
	};

	if (!publicId) {
		throw new Response(
			JSON.stringify({
				message: "Public ID is required.",
			}),
			{
				status: 400,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}

	return publicId;
};

export const image = {
	async upload(request: Request): Promise<Response> {
		const file = await getFile(request);

		const result = await uploadImage({
			file,
			folder: "avatars",
		});

		return Response.json(result);
	},

	async destroy(request: Request): Promise<Response> {
		const publicId = await getPublicId(request);

		await destroyImage({
			data: {
				publicId,
			},
		});

		return Response.json({
			message: "Image deleted.",
		});
	},
};

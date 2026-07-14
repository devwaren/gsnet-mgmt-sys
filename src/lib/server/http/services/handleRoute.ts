import type { HandleRoute } from "../types";

export const handleRoute: HandleRoute = async (callback, { errorMessage }) => {
	try {
		return await callback();
	} catch (error) {
		console.error(error);

		return Response.json(
			{
				message: error instanceof Error ? error.message : errorMessage,
			},
			{
				status: 500,
			},
		);
	}
};

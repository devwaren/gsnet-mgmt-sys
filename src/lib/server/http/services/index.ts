interface HandleRouteOptions {
	errorMessage: string;
}

export async function handleRoute(
	callback: () => Promise<Response>,
	{ errorMessage }: HandleRouteOptions,
): Promise<Response> {
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
}

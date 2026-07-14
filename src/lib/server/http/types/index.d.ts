type HandleRouteOptions = {
	errorMessage: string;
};

export type HandleRoute = (
	callback: () => Promise<Response>,
	{ errorMessage }: HandleRouteOptions,
) => Promise<Response>;

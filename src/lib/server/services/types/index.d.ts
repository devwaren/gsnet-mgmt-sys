export type ForgotPasswordRequest = {
	email: string;
	pppId: string;
};

export type HandleResponseFunction = (request: Request) => Promise<Response>;

export type UserHandleResponseFunction = {
	handler: HandleResponseFunction;
};

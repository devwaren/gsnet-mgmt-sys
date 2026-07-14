import { collection } from "../env";
import type {
	ForgotPasswordRequest,
	UserHandleResponseFunction,
} from "./types";

export const user: UserHandleResponseFunction = {
	handler: async (request) => {
		const { email, pppId } = (await request.json()) as ForgotPasswordRequest;

		console.log(email, pppId);

		const existingUser = await collection.user.findOne({
			pppId,
			email,
		});

		if (!existingUser) {
			return Response.json(
				{
					status: false,
					message: "Invalid email or PPP ID",
				},
				{
					status: 400,
				},
			);
		}

		return Response.json({
			status: true,
			message: "Password reset email sent",
		});
	},
};

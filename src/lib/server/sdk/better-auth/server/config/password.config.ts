import type { User } from "better-auth";
import { auth } from "../auth";

type EmailPasswordData = {
	user: User;
	url: string;
	token: string;
};

const emailAndPassword = {
	enabled: true,
	sendResetPassword: async (data: EmailPasswordData) => {
		await auth.api.requestPasswordReset({
			body: {
				email: data.user.email,
			},
		});
	},
} as const;

export { emailAndPassword };

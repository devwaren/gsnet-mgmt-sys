import type { User } from "better-auth";

import { resend } from "../auth";

type EmailPasswordData = {
	user: User;
	url: string;
	token: string;
};

const emailAndPassword = {
	enabled: true,
	sendResetPassword: async ({ user, url }: EmailPasswordData) => {
		const { error } = await resend.emails.send({
			from: "GS Internet <noreply@gsnet-sys.com>",
			to: user.email,
			subject: "Reset your password",
			html: `
				<p>You requested to reset your password.</p>
				<p>
					<a href="${url}">Reset Password</a>
				</p>
			`,
		});

		if (error) {
			throw new Error(error.message);
		}
	},
} as const;

export { emailAndPassword };

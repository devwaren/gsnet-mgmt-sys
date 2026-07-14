import { z } from "zod/v3";
import { sanitize } from "#/lib/server/helpers";

const resetPasswordSchema = z
	.object({
		password: z
			.string()
			.min(6, { message: "New password must be at least 6 characters" }),
		confirmPassword: z
			.string()
			.min(1, { message: "Confirm Password is Required" }),
	})
	.transform(sanitize)
	.refine((data) => data.password === data.confirmPassword, {
		message: "New Password do not match",
		path: ["confirmPassword"],
	});

export { resetPasswordSchema };

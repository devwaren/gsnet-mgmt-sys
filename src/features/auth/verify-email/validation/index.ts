import { z } from "zod/v3";

const verifyEmailSchema = z.object({
	code: z
		.string()
		.trim()
		.length(6, { message: "Verification code must be 6 digits." })
		.regex(/^\d{6}$/, { message: "Invalid verification code." }),
});

const emailSchema = z.object({
	email: z.string().email(),
});

export { verifyEmailSchema, emailSchema };

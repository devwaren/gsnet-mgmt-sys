import { z } from "zod/v3";

const verifyTwoWayEmailSchema = z.object({
	code: z
		.string()
		.trim()
		.length(6, { message: "Verification code must be 6 digits." })
		.regex(/^\d{6}$/, { message: "Invalid verification code." }),
});

export { verifyTwoWayEmailSchema };

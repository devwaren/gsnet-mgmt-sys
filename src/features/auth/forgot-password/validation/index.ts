import { z } from "zod/v3";

const forgotPasswordSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	pppId: z.string().min(6, { message: "PPP ID must be at least 6 characters" }),
});

export { forgotPasswordSchema };

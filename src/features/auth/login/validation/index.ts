import { z } from "zod/v3";
import { sanitize } from "#/lib/server/helpers";

const loginSchema = z
	.object({
		email: z.string().email({
			message: "Invalid email address",
		}),
		password: z.string().min(6, {
			message: "Password must be at least 6 characters",
		}),
	})
	.transform(sanitize);

export { loginSchema };

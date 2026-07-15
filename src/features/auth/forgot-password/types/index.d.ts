import type { z } from "zod/v3";

import type { forgotPasswordSchema } from "../validation";

type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export type HandlePasswordSchema = (
	data: ForgotPasswordSchema,
) => Promise<void>;

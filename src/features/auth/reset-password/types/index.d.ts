import type { z } from "zod/v3";
import type { resetPasswordSchema } from "../validation";

export type HandleResetPassword = (
	data: z.infer<typeof resetPasswordSchema>,
) => Promise<void>;

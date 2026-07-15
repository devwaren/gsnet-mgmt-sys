import type { z } from "zod/v3";

import type { verifyTwoWayEmailSchema } from "../validation";

type TwoWayVerificationSchema = z.infer<typeof verifyTwoWayEmailSchema>;

export type HandleTwoWayVerificationSchema = (
	data: TwoWayVerificationSchema,
) => Promise<void>;

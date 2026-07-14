import type { z } from "zod/v3";
import type { clientRegisterSchema } from "../validation";

type ClientRegisterSchema = z.infer<typeof clientRegisterSchema>;

export type HandleClientRegisterSubmit = (
	data: ClientRegisterSchema,
) => Promise<void>;

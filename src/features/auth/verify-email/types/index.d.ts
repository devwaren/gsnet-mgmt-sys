import type { verifyEmailSchema } from "../validation";

// Signature Types

export type HandleVerifyEmailSubmit = (
	data: z.infer<typeof verifyEmailSchema>,
) => Promise<void>;

export type HandleVerifyForm = ({ code }: { code: string }) => Promise<void>;

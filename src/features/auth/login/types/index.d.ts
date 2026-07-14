import type { z } from "zod/v3";
import type { loginSchema } from "../validation";

// Signature type for Login Submit

type LoginSchema = z.infer<typeof loginSchema>;

export type HandleLoginSubmit = (data: LoginSchema) => Promise<void>;

// Signature type for Login Entry Services

export type LoginServicesFunction = (data: LoginSchema) => Promise<void>;

import type { z } from "zod/v3";
import type { loginSchema } from "../validation";

// Signature type for Login Submit

type LoginSchema = z.infer<typeof loginSchema>;

export type HandleLoginSubmit = (data: LoginSchema) => Promise<void>;

// Signature type for Login Entry Services

export type LoginServicesFunction = (data: LoginSchema) => Promise<void>;


import type { auth } from "#/lib/server/sdk/better-auth/server/auth";

export type AuthUser = typeof auth.$Infer.Session.user;
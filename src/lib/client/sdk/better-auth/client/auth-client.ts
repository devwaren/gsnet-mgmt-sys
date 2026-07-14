import { passkeyClient } from "@better-auth/passkey/client";
import { emailOTPClient, twoFactorClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: import.meta.env.VITE_API_URL,
	basePath: "/api/v1/auth",
	plugins: [emailOTPClient(), passkeyClient(), twoFactorClient()],
});

import { passkeyClient } from "@better-auth/passkey/client";
import { emailOTPClient, twoFactorClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: "http://localhost:3000",
	basePath: "/api/v1/auth",
	plugins: [emailOTPClient(), passkeyClient(), twoFactorClient()],
});

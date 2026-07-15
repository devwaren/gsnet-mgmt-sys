import { passkeyClient } from "@better-auth/passkey/client";
import {
	emailOTPClient,
	inferOrgAdditionalFields,
	organizationClient,
	twoFactorClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: import.meta.env.VITE_API_URL,
	basePath: "/api/v1/auth",
	
	plugins: [
		organizationClient({
      schema: inferOrgAdditionalFields({
        organization: {
          additionalFields: {
            role: {
              type: "string", 
            }, 
          },
        },
      }),
    }),
		emailOTPClient(),
		passkeyClient(),
		twoFactorClient(),
	],
});


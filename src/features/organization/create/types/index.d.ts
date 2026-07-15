import type { z } from "zod/v3";

import type { createOrganizationSchema } from "../validation";

type CreateOrganizationSchema = z.infer<typeof createOrganizationSchema>;

export type CreateOrganizationFunction = (
	data: CreateOrganizationSchema,
) => ReturnType<typeof authClient.organization.create>;

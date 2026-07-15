import { authClient } from "#/lib/client/sdk/better-auth";
import type { CreateOrganizationFunction } from "../types";

export const createOrganizationService: CreateOrganizationFunction = (data) => {
	return authClient.organization.create({
		name: data.name,
		slug: data.slug,
	});
};

import type { Fields } from "#/shared/types";

export const createOrganizationFields: Fields[] = [
	{
		id: "name",
		name: "name",
		placeholder: "Organization name",
		type: "text",
		className: "col-span-2",
	},
	{
		id: "slug",
		name: "slug",
		placeholder: "Organization slug",
		type: "text",
	},
];

import type { Fields } from "#/shared/types";

const pppIdFields: Fields[] = [
	{
		id: "email",
		name: "email",
		type: "email",
		placeholder: "Enter Assigned Email Address",
	},
	{
		id: "pppId",
		name: "pppId",
		type: "text",
		placeholder: "Generate PPP ID",
	},
	{
		id: "pppIdExpiry",
		name: "pppIdExpiry",
		type: "date",
		placeholder: "Select PPP ID Expiry Date",
	},
];

export { pppIdFields };

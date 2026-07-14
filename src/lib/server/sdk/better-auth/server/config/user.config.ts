const user = {
	additionalFields: {
		pppId: {
			type: "string",
			required: true,
		},
		firstName: {
			type: "string",
			required: true,
		},
		lastName: {
			type: "string",
			required: true,
		},
		role: {
			type: "string",
			required: true,
			defaultValue: "client",
		},
	},
} as const;

export { user };

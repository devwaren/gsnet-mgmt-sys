import type { Fields } from "#/shared/types";

const resetPasswordFields: Fields[] = [
	{
		id: "password",
		name: "password",
		placeholder: "Enter New Password",
		type: "password",
	},
	{
		id: "confirmPassword",
		name: "confirmPassword",
		placeholder: "Re Enter New Password",
		type: "password",
	},
];

export { resetPasswordFields };

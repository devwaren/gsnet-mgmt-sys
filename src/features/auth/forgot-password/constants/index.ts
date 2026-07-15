import { Key, Mail } from "lucide-react";

import type { Fields } from "#/shared/types";

const forgotPasswordField: Fields[] = [
	{
		id: "pppId",
		name: "pppId",
		placeholder: "PPP Access ID",
		type: "password",
		icon: Key,
	},
	{
		id: "email",
		name: "email",
		placeholder: "Enter Email Address",
		type: "email",
		icon: Mail,
	},
];

export { forgotPasswordField };

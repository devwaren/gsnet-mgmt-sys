import { Lock, Mail } from "lucide-react";
import type { Fields } from "#/shared/types";

const loginFields: Fields[] = [
	{
		id: "email",
		name: "email",
		placeholder: "abc@example.com",
		type: "email",
		icon: Mail,
	},
	{
		id: "password",
		name: "password",
		placeholder: "password",
		type: "password",
		icon: Lock,
	},
];

export { loginFields };

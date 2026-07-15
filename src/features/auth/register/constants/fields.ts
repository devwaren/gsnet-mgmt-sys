import { Key, Mail } from "lucide-react";

import type { Fields } from "#/shared/types/index.js";

const registerFields: Fields[] = [
	{
		id: "Upload Image Preview",
		name: "preview",
		placeholder: "Upload Profile Here",
		type: "file",
	},
	{
		id: "Upload Image",
		name: "avatar",
		placeholder: "cloudinary url",
		type: "text",
		className: "hidden",
	},
	{
		id: "PPPID",
		name: "pppId",
		placeholder: "PPP Access ID",
		type: "text",
		className: "col-span-2",
		icon: Key,
	},
	{
		id: "firstName",
		name: "firstName",
		placeholder: "Given name",
		type: "text",
		className: "col-span-2",
	},
	{
		id: "lastName",
		name: "lastName",
		placeholder: "Surname",
		type: "text",
		className: "col-span-2",
	},
	{
		id: "password",
		name: "password",
		placeholder: "Password",
		type: "password",
		className: "col-span-2 md:col-span-1",
	},
	{
		id: "confirmPassword",
		name: "confirmPassword",
		placeholder: "Retype Password",
		type: "password",
		className: "col-span-2 md:col-span-1",
	},

	{
		id: "email",
		name: "email",
		placeholder: "Enter Email Address",
		type: "email",
		className: "col-span-2",
		icon: Mail,
	},
];

export { registerFields };

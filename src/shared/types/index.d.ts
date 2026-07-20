import type { LucideIcon } from "lucide-react";

type FieldTypes =
	| "email"
	| "password"
	| "checkbox"
	| "radio"
	| "password"
	| "file"
	| "select"
	| "date"
	| "text";

export type Fields = {
	id: string;
	name: string;
	placeholder: string;
	className?: string;
	type: FieldTypes;
	icon?: LucideIcon;
};

import type { LucideIcon } from "lucide-react";

export type InputProps<T extends FieldValues> = {
	name: Path<T>;
	label?: string;
	type?: string;
	placeholder?: string;
	className?: string;
	icon?: LucideIcon;
};

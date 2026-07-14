import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "../constants";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

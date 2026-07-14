import { cn } from "#/lib/client/helpers";
import { buttonVariants } from "./constants";
import type { ButtonProps } from "./types";

export function Button({ className, variant, size, ...props }: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ variant, size }), className)}
			{...props}
		/>
	);
}

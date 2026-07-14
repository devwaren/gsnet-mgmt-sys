import { cn } from "#/lib/client/helpers";
import type { FlexDrawerProps } from "./types";

export function FlexDrawer({ className, children, ...props }: FlexDrawerProps) {
	return (
		<div className={cn("flex", className)} {...props}>
			{children}
		</div>
	);
}

import type { LucideIcon } from "lucide-react";

type AuthIconProps = {
	icon: LucideIcon;
};

export function AuthIcon({ icon: Icon }: AuthIconProps) {
	return (
		<div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
			<Icon className="h-8 w-8 text-white" />
		</div>
	);
}

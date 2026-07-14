import { Settings } from "lucide-react";

export function NavbarSettings() {
	return (
		<div className="w-8 h-8 bg-white rounded-full grid place-items-center mr-4 text-gray-500 group cursor-pointer">
			<Settings width={20} className="group-hover:animate-spin duration-700" />
		</div>
	);
}

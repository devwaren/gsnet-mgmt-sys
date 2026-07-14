import { Bell } from "lucide-react";

export function NavbarNotify() {
	return (
		<div className="w-8 h-8 bg-white rounded-full grid place-items-center mr-4 text-gray-500 group">
			<Bell width={20} className="group-hover:animate-bell" />
		</div>
	);
}

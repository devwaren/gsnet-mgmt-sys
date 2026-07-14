import { Search } from "lucide-react";
import { useState } from "react";

export function NavbarSearch() {
	const [expanded, setExpanded] = useState(false);

	return (
		<div
			className={`flex items-center overflow-hidden rounded-full bg-white transition-all duration-300 mr-4 ${
				expanded ? "w-64 px-2" : "w-8"
			}`}
		>
			{expanded && (
				<input
					type="text"
					placeholder="Search..."
					onBlur={() => setExpanded(false)}
					className="ml-2 w-full bg-transparent outline-none"
				/>
			)}

			<button
				type="button"
				onClick={() => setExpanded(true)}
				className="flex h-8 w-8 items-center justify-center cursor-pointer"
				aria-label="Search"
			>
				<Search className="h-5 w-5 text-gray-500" />
			</button>
		</div>
	);
}

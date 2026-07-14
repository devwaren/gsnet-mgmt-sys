import { Wrench } from "lucide-react";

export function TicketsCard() {
	return (
		<div className="flex items-center space-x-4 rounded-2xl border border-gray-400 p-4">
			<div className="h-15 w-15 overflow-hidden rounded-full shrink-0 grid place-items-center bg-red-300">
				<Wrench />
			</div>

			<div className="flex flex-1 items-center justify-between">
				<div className="min-w-0">
					<div className="flex items-center space-x-4">
						<h2 className="text-md text-gray-800">#TK-4567</h2>
					</div>

					<p className="text-xs text-gray-500">Internet Loss</p>
					<p className="text-xs">10 mins ago</p>
				</div>
				<p className="rounded-full bg-red-200 px-4 py-1 text-xs border border-red-300">
					High
				</p>
			</div>
		</div>
	);
}

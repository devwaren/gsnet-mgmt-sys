import { Plus } from "lucide-react";

export function UsersCard() {
	return (
		<div className="flex items-center gap-3 rounded-2xl border border-gray-400 p-4 md:gap-4">
			<div className="h-14 w-14 shrink-0 overflow-hidden rounded-full md:h-16 md:w-16">
				<img
					src="/profile.webp"
					alt="profile"
					className="h-full w-full object-cover"
					width={100}
					height={100}
				/>
			</div>

			<div className="min-w-0 flex-1">
				<div className="flex flex-wrap items-center gap-2 md:gap-3">
					<h2 className="truncate text-sm font-semibold text-gray-800 md:text-base">
						Waren Gador
					</h2>

					<span className="rounded-full bg-cyan-100 px-3 py-1 text-[10px] font-medium md:px-4 md:text-xs">
						Senior
					</span>
				</div>

				<p className="mt-1 truncate text-xs text-gray-500 md:text-sm">
					Web Master Software Engineer
				</p>
			</div>

			<button
				type="button"
				className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white shadow-sm transition hover:bg-gray-50 md:h-12 md:w-12"
			>
				<Plus className="h-5 w-5" />
			</button>
		</div>
	);
}

export function PaymentCards() {
	return (
		<div className="space-y-3 rounded-xl bg-white/60 p-4 text-sm">
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div className="flex items-center gap-4">
					<div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-blue-100 p-2">
						<img
							src="/gcash.webp"
							alt="GCash"
							className="h-full w-full object-contain"
						/>
					</div>

					<div className="min-w-0">
						<h2 className="truncate font-medium">REF: REF456678</h2>
						<p className="truncate text-gray-600">Name: Jonalyn</p>
					</div>
				</div>

				<div className="space-y-2 text-sm md:text-right">
					<p className="flex items-center gap-2 md:justify-end">
						<span>Status:</span>
						<span className="rounded-md bg-green-200 px-3 py-1 text-xs font-medium">
							Paid
						</span>
					</p>

					<p className="flex items-center gap-2 md:justify-end">
						<span>Mode of Payment:</span>
						<span className="rounded-md bg-blue-200 px-3 py-1 text-xs font-medium">
							GCash
						</span>
					</p>
				</div>
			</div>

			<div className="h-px w-full bg-gray-200" />

			<div className="flex flex-col gap-2 text-xs text-gray-600 md:flex-row md:items-center md:justify-between">
				<p>Approved by: Joy</p>
				<p>Date: 7/11/2026</p>
			</div>
		</div>
	);
}

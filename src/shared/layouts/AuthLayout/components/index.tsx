type Position = "normal" | "inverted";

export function DescriptionDetails({ position }: { position: Position }) {
	return position === "normal" ? (
		<>
			<h2 className="text-3xl font-bold">Manage Your ISP with Confidence</h2>

			<p className="mt-4 max-w-md text-base leading-7 text-slate-200">
				A modern platform for managing customer accounts, PPP IDs, internet
				installations, billing records, and network operations—all in one place.
			</p>
		</>
	) : (
		<>
			<h2 className="text-3xl font-bold">Easily Manage Your ISP Operations</h2>

			<p className="mt-4 max-w-md text-base leading-7 text-slate-200">
				Start by registering your account using your PPP ID to manage customer
				accounts, installations, and other network services.
			</p>
		</>
	);
}

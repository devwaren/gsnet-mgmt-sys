import { GridDrawer } from "#/shared/layouts";
import { PaymentCards, TicketsCard, UsersCard } from "./components";
import { gridConfig } from "./constants";

export function AdminDashboardPage() {
	return (
		<GridDrawer columns={2} {...gridConfig}>
			<div className="flex w-full flex-col space-y-4">
				<div className="bg-white shadow-2xl w-full flex-2 rounded-2xl p-4">
					<h1>Something Here</h1>
				</div>
				<div className="flex flex-1 flex-col gap-4 text-gray-600 flex-wrap lg:flex-row">
					<div className="flex-1 space-y-4 py-2">
						<div className="flex items-center justify-between">
							<p className="text-2xl text-gray-800">Let's Connect</p>
							<p className="underline">See all</p>
						</div>

						<UsersCard />
						<UsersCard />
						<UsersCard />
					</div>

					<div className="flex-1 space-y-4 rounded-2xl border border-gray-300 px-4 py-2">
						<div className="flex items-center justify-between">
							<p className="text-2xl text-gray-800">Recent Tickets</p>
							<p className="underline">See all</p>
						</div>

						<TicketsCard />
						<TicketsCard />
						<TicketsCard />
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col p-4 text-gray-600 space-y-4">
				<div className="flex justify-between">
					<h2 className="text-xl text-gray-800">Recent Payments</h2>
					<p>See all</p>
				</div>
				<PaymentCards />
				<PaymentCards />
				<PaymentCards />
				<PaymentCards />
			</div>
		</GridDrawer>
	);
}

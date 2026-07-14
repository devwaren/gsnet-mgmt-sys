import type { Key } from "react";

type NavLinks = {
	id: Key;
	name: string;
	path: string;
};

const adminLinks: NavLinks[] = [
	{
		id: "Home",
		name: "Home",
		path: "/admin",
	},
	{
		id: "Users",
		name: "Users",
		path: "/admin/users",
	},
	{
		id: "Clients",
		name: "Clients",
		path: "/admin/clients",
	},
	{
		id: "Reports",
		name: "Reports",
		path: "/admin/reports",
	},
	{
		id: "Billing",
		name: "Billing",
		path: "/admin/billing",
	},
];

export { adminLinks };

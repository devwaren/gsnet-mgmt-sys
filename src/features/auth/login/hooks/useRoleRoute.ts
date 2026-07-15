import { useNavigate } from "@tanstack/react-router";

import type { Role } from "../types";

export const useRoleRoute = () => {
	const navigate = useNavigate();

	return async (role: Role) => {
		const routes = {
			admin: "/admin",
			staff: "/users",
			client: "/clients",
		} as const;

		await navigate({
			to: routes[role],
		});
	};
};

import { useNavigate } from "@tanstack/react-router";

import type { LoginResponse, Role } from "../types";
import { useRoleRoute } from "./useRole.route";

const useVerifyEmailData = () => {
	const navigate = useNavigate();
	const navigateByRole = useRoleRoute();

	return async (data: LoginResponse) => {
		if (!data.user.emailVerified) {
			return navigate({
				to: "/verify-email/$hash",
				params: {
					hash: data.token,
				},
			});
		}

		if (data.user.twoFactorEnabled) {
			return navigate({
				to: "/two-factor/$hash",
				params: {
					hash: data.token,
				},
			});
		}

		return navigateByRole(data.user.role as Role);
	};
};

export { useVerifyEmailData };

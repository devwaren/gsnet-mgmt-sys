import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-hot-toast";

import { loginService } from "../services";
import type { LoginEmail, LoginResponse, Role } from "../types";
import { useRoleRoute } from "./useRoleRoute";

const useLoginEntry = () => {
	const navigateByRole = useRoleRoute();
	const navigate = useNavigate();

	return useMutation<LoginResponse, Error, LoginEmail>({
		mutationKey: ["login-credentials"],
		mutationFn: loginService,

		onSuccess: async (data) => {
			if (!data.user.emailVerified) {
				await navigate({
					to: "/verify-email/$hash",
					params: { hash: data.token },
				});
			}
			if (data.user?.twoFactorEnabled) {
				await navigate({
					to: "/two-factor/$hash",
					params: { hash: data.token },
				});
			}
			await navigateByRole(data.user.role as Role);
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});
};

export { useLoginEntry };

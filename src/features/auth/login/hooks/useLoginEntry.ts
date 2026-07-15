import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { loginService } from "../services";
import type { LoginEmail, LoginResponse, Role } from "../types";
import { useRoleRoute } from "./useRoleRoute";

const useLoginEntry = () => {
	const navigateByRole = useRoleRoute();

	return useMutation<LoginResponse, Error, LoginEmail>({
		mutationKey: ["login-credentials"],
		mutationFn: loginService,

		onSuccess: async (data) => {
			await navigateByRole(data.user.role as Role);
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});
};

export { useLoginEntry };

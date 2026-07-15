import { loginService } from "../services";
import type { LoginEmail, LoginResponse } from "../types";
import { useRoleRoute } from "./useRoleRoute";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const useLoginEntry = () => {
	const navigateByRole = useRoleRoute();

	return useMutation<LoginResponse, Error, LoginEmail>({
		mutationKey: ["login-credentials"],
		mutationFn: loginService,

		onSuccess: async (data) => {
			await navigateByRole(data.user.role);
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});
};

export { useLoginEntry };

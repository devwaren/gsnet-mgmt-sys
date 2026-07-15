import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-hot-toast";
import { loginService } from "../services";
import type { AuthUser } from "../types";

type LoginEmail = {
	email: string;
	password: string;
};

type LoginResponse = {
	user: AuthUser;
};

const useLoginEntry = () => {
	const navigate = useNavigate();

	return useMutation<LoginResponse, Error, LoginEmail>({
		mutationKey: ["login-credentials"],
		mutationFn: loginService,

		onSuccess: async (data) => {
			if (data.user.role === "admin") {
				await navigate({
					to: "/admin",
				});
			} else if (data.user.role === "staff") {
				await navigate({
					to: "/users"
				})
			} else {
				await navigate({to: "/clients"})
			}
		},

		onError: (err) => {
			toast.error(err.message);
		},
	});
};

export { useLoginEntry };
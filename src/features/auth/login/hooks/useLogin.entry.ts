import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { loginService } from "../services";
import type { LoginEmail, LoginResponse } from "../types";
import { useVerifyEmailData } from "./useVerifyEmail.data";

const useLoginEntry = () => {
	const emailVerify = useVerifyEmailData();

	return useMutation<LoginResponse, Error, LoginEmail>({
		mutationKey: ["login-credentials"],
		mutationFn: loginService,

		onSuccess: async (data) => {
			await emailVerify(data);
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});
};

export { useLoginEntry };

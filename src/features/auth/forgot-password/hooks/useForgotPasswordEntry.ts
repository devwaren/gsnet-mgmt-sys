import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-hot-toast";
import { forgotPasswordService } from "../services";

export const useForgotPasswordEntry = () => {
	const navigate = useNavigate();

	return useMutation({
		mutationKey: ["forgot-password-entry"],
		mutationFn: forgotPasswordService,
		onSuccess: (data) => {
			toast.success(data.message);
			navigate({ to: "/login" });
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});
};

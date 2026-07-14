import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-hot-toast";
import { loginService } from "../services";

const useLoginEntry = () => {
	const navigate = useNavigate();
	return useMutation({
		mutationKey: ["login-credentials"],
		mutationFn: loginService,
		onSuccess: async (data) => {
			console.log(data);
			await navigate({
				to: "/admin",
			});
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});
};

export { useLoginEntry };

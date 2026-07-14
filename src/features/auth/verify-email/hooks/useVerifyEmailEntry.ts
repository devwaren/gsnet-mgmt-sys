import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-hot-toast";
import { verifyEmailService } from "../services/client";

const useVerifyEmailEntry = () => {
	const navigate = useNavigate();

	return useMutation({
		mutationKey: ["verify-email"],
		mutationFn: verifyEmailService,
		onSuccess: (result) => {
			if (result.error) {
				toast.error(result.error.message as string);
				return;
			}

			toast.success("Email Verification Successfully");
			navigate({ to: "/admin" });
		},
	});
};

export { useVerifyEmailEntry };

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { registerEntryServices } from "../services";

const useRegisterEntry = () => {
	const navigate = useNavigate();

	return useMutation({
		mutationKey: ["register-credentials"],
		mutationFn: registerEntryServices,
		onSuccess: ({ data }) => {
			if (!data?.token) return;

			navigate({
				to: "/verify-email/$hash",
				params: {
					hash: String(data.token),
				},
			});
		},
	});
};

export { useRegisterEntry };

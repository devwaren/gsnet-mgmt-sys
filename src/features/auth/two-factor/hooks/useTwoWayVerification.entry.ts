import { useMutation } from "@tanstack/react-query";

import { twoWayEmailService } from "../services";

const useTwoWayVerificationEntry = () => {
	return useMutation({
		mutationKey: ["two-way-verification-entry"],
		mutationFn: twoWayEmailService,
		onSuccess: (data) => {
			console.log(data);
		},
	});
};

export { useTwoWayVerificationEntry };

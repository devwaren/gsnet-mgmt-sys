import { useMutation } from "@tanstack/react-query";

import { createOrganizationService } from "../services";

const useCreateOrgEntry = () => {
	return useMutation({
		mutationKey: ["create-new-organization"],
		mutationFn: createOrganizationService,
		onSuccess: (data) => {
			console.log(`Submitted data :`, data);
		},
	});
};

export { useCreateOrgEntry };

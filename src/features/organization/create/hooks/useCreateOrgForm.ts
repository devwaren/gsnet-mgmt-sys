import { useFormSettings } from "@dev-waren/react-form-kit";

import { createOrganizationSchema } from "../validation";
import { useCreateOrgEntry } from "./useCreateOrgEntry";

const useCreateOrgForm = () => {
	const mutation = useCreateOrgEntry();

	return useFormSettings({
		schema: createOrganizationSchema,
		defaultValues: {
			name: "",
			slug: "",
		},
		onSubmit: (data) => mutation.mutateAsync(data),
	});
};

export { useCreateOrgForm };

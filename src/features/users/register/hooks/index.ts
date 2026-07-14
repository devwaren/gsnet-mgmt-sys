import { useFormSettings } from "#/shared/hooks";
import type { HandleClientRegisterSubmit } from "../types";
import { clientRegisterSchema } from "../validation";

const handleClientRegisterSubmit: HandleClientRegisterSubmit = async (data) => {
	console.log(`Successfully Submitted data: `, data);
};

const useClientRegisterForm = () => {
	const form = useFormSettings({
		schema: clientRegisterSchema,
		defaultValues: {
			clientsName: "",
			address: "",
			installationPlan: "15MBPS",
			installedBy: "",
			phone: 0,
			pppId: "",
			username: "",
			initialPassword: "",
			active: false,
			date: undefined,
		},
		onSubmit: handleClientRegisterSubmit,
		clearFields: [
			"clientsName",
			"address",
			"installationPlan",
			"email",
			"installedBy",
			"phone",
			"pppId",
			"username",
			"initialPassword",
			"date",
		],
	});

	return form;
};

export { useClientRegisterForm };

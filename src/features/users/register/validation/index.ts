import { z } from "zod/v3";
import { sanitize } from "#/shared/helpers";

const clientRegisterSchema = z
	.object({
		clientsName: z.string().min(1, { message: "Client's Name is required." }),

		address: z.string().min(1, { message: "Client Address is required." }),

		email: z
			.string()
			.min(1, { message: "Client's Email Address is required." })
			.email({ message: "Invalid email address." }),

		phone: z.string().regex(/^\d{11}$/, {
			message: "Phone number must be exactly 11 digits.",
		}),

		installationPlan: z
			.string()
			.min(1, { message: "Internet Installation Plan is required." }),

		installedBy: z
			.string()
			.min(1, { message: "Installer's Name is required." }),

		date: z.coerce.date(),

		pppId: z.string().min(1, { message: "PPP ID is required." }),

		username: z.string().min(1, { message: "Router Username is required." }),

		initialPassword: z
			.string()
			.min(1, { message: "Router Default Password is required." }),

		active: z.boolean(),
	})
	.transform(sanitize);

export { clientRegisterSchema };

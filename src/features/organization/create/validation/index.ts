import { sanitize } from "@dev-waren/react-form-kit/src/helpers";
import { z } from "zod/v3";

const createOrganizationSchema = z
	.object({
		userId: z
			.string()
			.min(16, { message: "UserID must be atleast 16 characters long." }),
		name: z.string().min(3, {
			message: "Organization name must be atleast 3 charaters long.",
		}),
		slug: z
			.string()
			.min(3, { message: "slug must be atleast 3 charaters long." }),
	})
	.transform(sanitize);

export { createOrganizationSchema };

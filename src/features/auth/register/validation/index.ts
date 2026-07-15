import { sanitize } from "@dev-waren/react-form-kit/src/helpers";
import { z } from "zod/v3";

import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "../constants";

export const registerSchema = z
	.object({
		pppId: z.string().length(16, {
			message: "PPP Access ID must be exactly 16 characters",
		}),
		firstName: z.string().min(1, { message: "First Name is required" }),
		lastName: z.string().min(1, { message: "Last Name is required" }),
		email: z.string().email({ message: "Invalid email address" }),
		preview: z
			.custom<File>((value) => value instanceof File, {
				message: "Avatar is required",
			})
			.refine((file) => file.size <= MAX_FILE_SIZE, {
				message: "Avatar must be 5 MB or less",
			})
			.refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
				message: "Only JPG, PNG, and WebP images are allowed",
			}),

		password: z.string().min(6, {
			message: "Password must be at least 6 characters",
		}),
		confirmPassword: z.string().min(1, {
			message: "Confirm Password is required",
		}),
		avatar: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Passwords do not match",
	})
	.transform(sanitize);

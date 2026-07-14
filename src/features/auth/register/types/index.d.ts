import type { z } from "zod/v3";
import type { registerSchema } from "../validation";

export type UploadImageResponse = {
	url: string;
	publicId: string;
};

// Signature type for Register Submit

type RegisterSchema = z.infer<typeof registerSchema>;

export type HandleRegisterSubmit = (data: RegisterSchema) => Promise<void>;

// Signature type for Register Services

export type RegisterServicesFunction = (
	data: Partial<RegisterSchema>,
) => Promise<void>;

// Signature type for Upload Services

export type UploadServicesFunction = (
	file: File,
) => Promise<UploadImageResponse>;

export type HandleAvatarUpload = (
	data: RegisterSchema,
) => Promise<UploadImageResponse>;

export type DeleteUploadServicesFunction = (publicId: string) => Promise<void>;

export type RegisterServiceParameter = Parameters<RegisterServicesFunction>[0];

export type RegisterData = {
	pppId?: string;
	firstName: string;
	lastName: string;
	email: string;
	preview: File;
	password: string;
	confirmPassword: string;
	avatar: string;
};

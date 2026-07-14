export const defaultValues = {
	pppId: "",
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
	avatar: "",
	preview: undefined,
} as const;

export const clearFields = [
	"avatar",
	"email",
	"firstName",
	"lastName",
	"password",
	"confirmPassword",
	"preview",
] as const;

import { Input, Mapper } from "#/shared/components/index.tsx";
import { forgotPasswordField } from "../constants";

const forgotPasswordFieldProps = {
	listFor: "forgot password form",
	items: forgotPasswordField,
	className: "space-y-2",
};

export function ForgotPasswordField() {
	return (
		<Mapper {...forgotPasswordFieldProps}>
			{(item) => <Input {...item} />}
		</Mapper>
	);
}

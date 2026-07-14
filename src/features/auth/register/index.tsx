import {
	Form,
	FormContainer,
	FormDescription,
	FormSection,
	FormTitle,
} from "@dev-waren/react-form-kit";
import { RegisterFields, RegisterMenu } from "./components";
import { useRegisterForm } from "./hooks";

export function RegisterForm() {
	const form = useRegisterForm();

	return (
		<FormContainer>
			<Form {...form} className="w-full space-y-6 text-center lg:w-2/3 py-8">
				<FormTitle id="register-title">Register</FormTitle>

				<FormDescription>
					Create your account by filling in the information below to get
					started.
				</FormDescription>

				<FormSection aria-labelledby="register-title">
					<RegisterFields />
					<RegisterMenu />
				</FormSection>
			</Form>
		</FormContainer>
	);
}

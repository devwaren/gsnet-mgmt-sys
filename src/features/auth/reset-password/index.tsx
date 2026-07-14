import {
	Form,
	FormContainer,
	FormDescription,
	FormSection,
	FormTitle,
} from "@dev-waren/react-form-kit";
import { LockKeyhole } from "lucide-react";
import { AuthIcon } from "#/shared/components";
import {
	ResetPasswordEmail,
	ResetPasswordFields,
	ResetPasswordMenu,
} from "./components";
import { useResetPasswordForm } from "./hooks";

export function ResetPasswordForm() {
	const form = useResetPasswordForm();

	return (
		<FormContainer>
			<AuthIcon icon={LockKeyhole} />

			<FormTitle id="reset-title">Reset Password</FormTitle>

			<FormDescription>
				Create a strong new password for your account. Make sure it contains at
				least 8 characters with a mix of letters, numbers, and symbols.
			</FormDescription>

			<ResetPasswordEmail email="sample@gmail.com" />
			<Form
				{...form}
				className="mt-8 w-full space-y-8 flex flex-col items-center"
			>
				<FormSection
					aria-labelledby="reset-title"
					className="flex flex-col items-center"
				>
					<ResetPasswordFields />
					<ResetPasswordMenu />
				</FormSection>
			</Form>
		</FormContainer>
	);
}

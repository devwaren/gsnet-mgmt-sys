import {
  Form,
  FormContainer,
  FormDescription,
  FormSection,
  FormTitle,
} from "@dev-waren/react-form-kit";

import { ForgotPasswordField, ForgotPasswordMenu } from "./components";
import { useForgotPasswordForm } from "./hooks";

export function ForgotPasswordForm() {
  const form = useForgotPasswordForm();

  return (
    <FormContainer>
      <Form {...form} className="space-y-8 w-full text-center md:w-2/3">
        <FormTitle id="forgot-password-title">Forgot Password</FormTitle>

        <FormDescription>
          Enter your email address, and we'll send you a verification code to
          reset your password.
        </FormDescription>

        <FormSection aria-labelledby="forgot-password-title">
          <ForgotPasswordField />
          <ForgotPasswordMenu />
        </FormSection>
      </Form>
    </FormContainer>
  );
}

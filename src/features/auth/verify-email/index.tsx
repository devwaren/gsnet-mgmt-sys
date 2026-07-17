import { Form, FormContainer, FormSection } from "@dev-waren/react-form-kit";
import { Mail } from "lucide-react";

import { AuthIcon, OTPInput } from "#/shared/components";
import {
  AlreadyVerifiedLink,
  ResendOTPCode,
  VerifyButton,
  VerifyEmailHeader,
} from "./components";
import { otpInputProps } from "./constants";
import { useVerifyEmail } from "./hooks";

export function VerifyEmailForm() {
  const { form, email } = useVerifyEmail();

  return (
    <FormContainer>
      <Form
        {...form}
        className="mt-2 w-full space-y-4 flex flex-col items-center">
        <AuthIcon icon={Mail} />

        <VerifyEmailHeader email={email} />

        <FormSection>
          <OTPInput {...otpInputProps} />
          <VerifyButton />
        </FormSection>
      </Form>

      <FormSection>
        <ResendOTPCode />
        <AlreadyVerifiedLink />
      </FormSection>
    </FormContainer>
  );
}

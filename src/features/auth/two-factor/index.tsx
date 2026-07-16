import {
  Form,
  FormContainer,
  FormDescription,
  FormSection,
  FormTitle,
} from "@dev-waren/react-form-kit";
import { ShieldCheck } from "lucide-react";

import { useUserSession } from "#/lib/client/hooks";
import { AuthIcon, OTPInput } from "#/shared/components";
import { TwoWayVerificationEmail, TwoWayVerificationMenu } from "./components";
import { otpInputProps } from "./constants";
import { useTwoWayVerificationForm } from "./hooks";

export function TwoWayVerificationForm() {
  const form = useTwoWayVerificationForm();

  const { user } = useUserSession();

  return (
    <FormContainer>
      <Form
        {...form}
        className="mt-8 flex w-full flex-col items-center space-y-8 text-center">
        <AuthIcon icon={ShieldCheck} />

        <FormTitle id="two-way-auth-title" className="font-semibold">
          Two-Factor Authentication
        </FormTitle>

        <FormSection aria-labelledby="two-way-auth-title">
          <FormDescription>
            Enter the 6-digit verification code sent to your email to continue
            signing in.
          </FormDescription>

          <FormSection>
            <TwoWayVerificationEmail email={user?.email as string} />

            <OTPInput {...otpInputProps} />
            <TwoWayVerificationMenu />
          </FormSection>
        </FormSection>
      </Form>
    </FormContainer>
  );
}

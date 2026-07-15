import {
  Form,
  FormContainer,
  FormDescription,
  FormSection,
  FormTitle,
} from "@dev-waren/react-form-kit";

import { LoginFields, LoginMenu } from "./components";
import { useLoginForm } from "./hooks";

export function LoginForm() {
  const form = useLoginForm();

  return (
    <FormContainer>
      <Form {...form} className="w-full space-y-9 text-center lg:w-2/3">
        <FormTitle id="login-title">Welcome Back</FormTitle>

        <FormDescription>
          Sign in with your email and password to access your account.
        </FormDescription>

        <FormSection aria-label="Login-title">
          <LoginFields />
          <LoginMenu />
        </FormSection>
      </Form>
    </FormContainer>
  );
}

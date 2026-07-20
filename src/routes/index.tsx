import { createFileRoute } from "@tanstack/react-router";

import { LoginForm } from "../features/auth/login";
import { AuthLayout } from "../shared/layouts";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

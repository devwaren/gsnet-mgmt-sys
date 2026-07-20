import { createFileRoute } from "@tanstack/react-router";

import { LoginForm } from "#/features/auth/login";
import { AuthLayout } from "#/shared/layouts";

export const Route = createFileRoute("/_public/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

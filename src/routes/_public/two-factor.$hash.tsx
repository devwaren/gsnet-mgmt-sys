import { createFileRoute } from "@tanstack/react-router";
import { TwoWayVerificationForm } from "#/features/auth/two-factor";
import { AuthLayout } from "#/shared/layouts";

export const Route = createFileRoute("/_public/two-factor/$hash")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <TwoWayVerificationForm />
    </AuthLayout>
  );
}

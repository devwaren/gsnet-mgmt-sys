import { createFileRoute } from "@tanstack/react-router";
import { ResetPasswordForm } from "#/features/auth/reset-password";
import { AuthLayout } from "#/shared/layouts";

export const Route = createFileRoute("/_public/reset-password/$hash")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<AuthLayout>
			<ResetPasswordForm />
		</AuthLayout>
	);
}

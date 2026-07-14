import { createFileRoute } from "@tanstack/react-router";
import { ForgotPasswordForm } from "#/features/auth/forgot-password";
import { AuthLayout } from "#/shared/layouts";

export const Route = createFileRoute("/_public/forgot-password")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<AuthLayout>
			<ForgotPasswordForm />
		</AuthLayout>
	);
}

import { createFileRoute } from "@tanstack/react-router";
import { VerifyEmailForm } from "#/features/auth/verify-email";
import { AuthLayout } from "#/shared/layouts";

export const Route = createFileRoute("/_public/verify-email/$hash")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<AuthLayout>
			<VerifyEmailForm />
		</AuthLayout>
	);
}

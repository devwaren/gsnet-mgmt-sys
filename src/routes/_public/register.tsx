import { createFileRoute } from "@tanstack/react-router";
import { RegisterForm } from "#/features/auth/register";
import { AuthLayout } from "#/shared/layouts";

export const Route = createFileRoute("/_public/register")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<AuthLayout position="inverted">
			<RegisterForm />
		</AuthLayout>
	);
}

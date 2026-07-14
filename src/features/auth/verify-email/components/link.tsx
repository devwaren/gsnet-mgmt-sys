import { Link } from "@tanstack/react-router";
import { LoaderCircle, Mail } from "lucide-react";
import { authClient } from "#/lib/client/sdk/better-auth/index.ts";
import { Button } from "#/shared/components";
import { useVerifyEmailForm } from "../hooks";

export function AlreadyVerifiedLink() {
	return (
		<div className="mt-8 text-center text-sm text-white/60">
			Already verified?{" "}
			<Link
				to="/login"
				className="font-semibold text-white transition hover:text-white/80"
			>
				Back to Login
			</Link>
		</div>
	);
}

export function VerifyButton() {
	const { data: session } = authClient.useSession();
	const email = session?.user.email as string;

	const { methods } = useVerifyEmailForm(email);

	const { isSubmitting } = methods.formState;

	return (
		<Button
			type="submit"
			variant="secondary"
			className="h-12 w-full rounded-xl text-gray-600"
			disabled={isSubmitting}
		>
			{isSubmitting ? (
				<>
					<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
					Verifying...
				</>
			) : (
				<>
					<Mail className="mr-2 h-4 w-4" />
					Verify Email
				</>
			)}
		</Button>
	);
}

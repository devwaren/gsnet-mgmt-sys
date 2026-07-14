import { Form } from "@dev-waren/react-form-kit";
import { RefreshCw } from "lucide-react";
import { useUserSession } from "#/lib/client/hooks/index.ts";
import { Button } from "#/shared/components";
import { useResendOTPForm } from "../hooks";

export function ResendOTPCode() {
	const { user } = useUserSession();
	const form = useResendOTPForm(user?.email as string);

	return (
		<div className="mt-6 flex items-center gap-2 text-sm text-white/60">
			<span>Didn't receive the code?</span>

			<Form {...form}>
				<Button
					type="submit"
					variant="ghost"
					size="sm"
					disabled={form.methods.formState.isSubmitting}
					className="h-auto p-0 font-semibold text-white hover:bg-transparent"
				>
					<RefreshCw
						className={`mr-1 h-4 w-4 ${
							form.methods.formState.isSubmitting ? "animate-spin" : ""
						}`}
					/>

					{form.methods.formState.isSubmitting ? "Sending..." : "Resend"}
				</Button>
			</Form>
		</div>
	);
}

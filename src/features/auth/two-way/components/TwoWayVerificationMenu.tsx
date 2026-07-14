import { Button } from "#/shared/components";
import { BackToLoginLink } from "./BackToLoginLink";

export function TwoWayVerificationMenu() {
	return (
		<>
			<Button variant="secondary" className="w-full">
				Verify Account
			</Button>

			<BackToLoginLink />
		</>
	);
}

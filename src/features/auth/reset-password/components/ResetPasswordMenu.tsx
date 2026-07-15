import { Button } from "#/shared/components";
import { BackToLoginLink } from "./BackToLoginLink";

export function ResetPasswordMenu() {
  return (
    <>
      <Button variant="secondary" className="w-full">
        Save New Password
      </Button>
      <BackToLoginLink />
    </>
  );
}

import { Button } from "#/shared/components";
import { ForgotPasswordLink } from "./ForgotPasswordLink";

export function ForgotPasswordMenu() {
  return (
    <>
      <Button variant="secondary" size="sm" className="w-full">
        Submit
      </Button>
      <ForgotPasswordLink />
    </>
  );
}

import { Button } from "#/shared/components";
import { BackToLoginLink } from "./BackToLoginLink";

export function TwoWayVerificationMenu() {
  return (
    <div className="space-y-2 ">
      <Button variant="secondary" size={"sm"} className="w-full">
        Verify Account
      </Button>
      <Button variant="secondary" size={"sm"} className="w-full">
        Other ways
      </Button>

      <BackToLoginLink />
    </div>
  );
}

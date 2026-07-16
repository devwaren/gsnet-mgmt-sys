import { Mapper } from "@dev-waren/react-form-kit";

import { Input } from "#/shared/components";
import { resetPasswordFields } from "../constants";

export function ResetPasswordFields() {
  return (
    <Mapper
      listFor="Reset Password Form"
      items={resetPasswordFields}
      className="space-y-2">
      {item => <Input {...item} />}
    </Mapper>
  );
}

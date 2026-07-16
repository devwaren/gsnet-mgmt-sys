import { Mapper } from "@dev-waren/react-form-kit";

import { Input } from "#/shared/components/index.tsx";
import { createOrganizationFields } from "../constants";

const fieldProps = {
  listFor: "create organization fields",
  items: createOrganizationFields,
  className: "",
};

export function CreateFields() {
  return <Mapper {...fieldProps}>{item => <Input {...item} />}</Mapper>;
}

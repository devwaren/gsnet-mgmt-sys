import { Mapper } from "@dev-waren/react-form-kit";

import { Input } from "#/shared/components";
import { pppIdFields } from "../constants";

const pppIdProps = {
  listFor: "PPPID Registration",
  items: pppIdFields,
  className: "",
};

export function PPPIDFields() {
  return <Mapper {...pppIdProps}>{item => <Input {...item} />}</Mapper>;
}

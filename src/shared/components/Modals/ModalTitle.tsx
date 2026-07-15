import { FormTitle } from "@dev-waren/react-form-kit";
import type { ComponentProps } from "react";

type Props = ComponentProps<"h2">;

export function ModalTitle(props: Props) {
  return <FormTitle {...props} />;
}

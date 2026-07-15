import { FormDescription } from "@dev-waren/react-form-kit";
import type { ComponentProps } from "react";

type Props = ComponentProps<"p">;

export function ModalDescription(props: Props) {
  return <FormDescription {...props} />;
}

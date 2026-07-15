import { FormDescription } from "@dev-waren/react-form-kit";
import type { ComponentProps } from "react";

type Props = ComponentProps<"p">;

export function DialogDescription(props: Props) {
  return <FormDescription {...props} />;
}

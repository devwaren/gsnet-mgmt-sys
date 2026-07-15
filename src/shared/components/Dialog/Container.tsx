import type { ComponentProps } from "react";

type DialogContainerProps = ComponentProps<"dialog">;

export function DialogContainer({ children, ...props }: DialogContainerProps) {
  return <dialog {...props}>{children}</dialog>;
}

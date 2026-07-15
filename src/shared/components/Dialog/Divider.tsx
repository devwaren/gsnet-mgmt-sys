import type { ComponentProps } from "react";

type Props = ComponentProps<"hr">;

export function DialogDivider({ className, ...props }: Props) {
  return (
    <hr
      className={["border-border", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

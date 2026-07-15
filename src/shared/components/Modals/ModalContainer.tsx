import { Form } from "@dev-waren/react-form-kit";
import type { ComponentProps } from "react";

type ModalContainerProps = {
  form: ComponentProps<typeof Form>;
};

export function ModalContainer({ form }: ModalContainerProps) {
  return (
    <div className="fixed inset-0 bg-black/70">
      <div className="mx-auto mt-20 h-[12em] w-1/2 rounded-md p-4 shadow-md">
        <Form {...form} />
      </div>
    </div>
  );
}

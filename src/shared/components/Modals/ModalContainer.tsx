import { Form } from "@dev-waren/react-form-kit";
import type { ChangeEventHandler } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";

type ModalContainerProps = {
  form: {
    methods: UseFormReturn<FieldValues>;
    onSubmit: ChangeEventHandler<HTMLFormElement, Element>;
    children: React.ReactNode;
  };
};

export function ModalContainer({ form }: ModalContainerProps) {
  return (
    <div className="p-4 rounded-md shadow-md">
      <Form {...form}></Form>
    </div>
  );
}

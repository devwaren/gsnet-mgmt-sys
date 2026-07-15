import type { PropsWithChildren } from "react";

export function ModalContainer({ children }: PropsWithChildren) {
  return (
    <div className="fixed inset-0 bg-black/70">
      <div className="mx-auto mt-20 w-1/2 rounded-md bg-white p-4 shadow-md">
        {children}
      </div>
    </div>
  );
}

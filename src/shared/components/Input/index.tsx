import { AlertCircle } from "lucide-react";
import { useEffect } from "react";
import { type FieldValues, useFormContext } from "react-hook-form";

import { usePasswordStore } from "#/shared/store";
import { PasswordButton } from "../PasswordButton";
import type { InputProps } from "./types";

const Input = <T extends FieldValues>({
  name,
  type = "text",
  placeholder,
  className,
  icon: Icon,
}: InputProps<T>) => {
  const isPassword = type === "password";

  const {
    register,
    clearErrors,
    formState: { errors },
  } = useFormContext<T>();

  const { showPassword } = usePasswordStore();

  const error = errors[name]?.message as string | undefined;

  useEffect(() => {
    if (!error) return;

    const timeout = setTimeout(() => {
      clearErrors(name);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [error, name, clearErrors]);

  return (
    <div className="w-full space-y-1">
      <div className="relative">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <Icon size={18} className="text-gray-400" />
          </div>
        )}

        <input
          {...register(name)}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          className={`
						peer w-full rounded-md border bg-white py-2 text-sm outline-none transition-all
						${Icon ? "pl-10" : "pl-4"}
						${isPassword ? "pr-10" : "pr-4"}
						focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
						${error ? "border-red-500 focus:ring-red-500/20" : "border-gray-300"}
						${className ?? ""}
					`}
        />

        {isPassword && <PasswordButton />}

        {error && (
          <div className="absolute inset-y-0 right-10 flex items-center">
            <AlertCircle size={16} className="text-red-500" />
          </div>
        )}
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export { Input };

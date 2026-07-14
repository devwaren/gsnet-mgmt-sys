import { useMemo, useRef } from "react";
import type { FieldValues, Path } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";
import type {
	GetInputPropsFunction,
	HandleChangeFunction,
	HandleKeyDownFunction,
} from "../types";

type UseOTPInputFormProps<T extends FieldValues> = {
	name: Path<T>;
	length?: number;
	className?: string;
};

const useOTPInputForm = <T extends FieldValues>({
	name,
	length = 6,
	className,
}: UseOTPInputFormProps<T>) => {
	const { control } = useFormContext<T>();

	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	const {
		field: { value = "", onChange },
		fieldState: { error },
	} = useController({
		name,
		control,
	});

	const code = String(value);

	const digits = useMemo(
		() => Array.from({ length }, (_, index) => code[index] ?? ""),
		[code, length],
	);

	const keys = useMemo(
		() => Array.from({ length }, (_, index) => `${String(name)}-${index + 1}`),
		[name, length],
	);

	const handleChange: HandleChangeFunction = (index, event) => {
		const digit = event.target.value.slice(-1);

		if (digit && !/^\d$/.test(digit)) {
			return;
		}

		const next = [...digits];
		next[index] = digit;

		onChange(next.join(""));

		if (digit && index < length - 1) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyDown: HandleKeyDownFunction = (index, event) => {
		if (event.key === "Backspace") {
			if (digits[index]) {
				const next = [...digits];
				next[index] = "";
				onChange(next.join(""));
				return;
			}

			if (index > 0) {
				inputRefs.current[index - 1]?.focus();
			}
		}
	};

	const getInputProps: GetInputPropsFunction = (index) => ({
		ref: (element: HTMLInputElement | null) => {
			inputRefs.current[index] = element;
		},
		type: "text",
		inputMode: "numeric",
		maxLength: 1,
		autoComplete: index === 0 ? "one-time-code" : undefined,
		value: digits[index],
		error: !!error,
		className,
		onChange: (event) => handleChange(index, event),
		onKeyDown: (event) => handleKeyDown(index, event),
	});

	return {
		keys,
		error,
		getInputProps,
	};
};

export { useOTPInputForm };

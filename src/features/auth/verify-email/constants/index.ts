import type { Fields } from "#/shared/types";

const codeFields: Fields[] = Array.from({ length: 6 }, (_, index) => ({
	id: `code${index + 1}`,
	name: `code${index + 1}`,
	placeholder: "",
	type: "text",
	maxLength: 1,
	inputMode: "numeric",
	autoComplete: "one-time-code",
}));

export { codeFields };

const otpInputProps = {
	name: "code",
	className:
		"h-14 w-14 rounded-xl border-white/20 bg-white text-black shadow-lg text-gray-500",
};

export { otpInputProps };

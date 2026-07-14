import type { InputHTMLAttributes } from "react";

type OTPInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	error?: boolean;
};

const OTPInputField = ({ error, className, ...props }: OTPInputFieldProps) => {
	const isError = error
		? "border-red-500"
		: "border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20";

	return (
		<input
			{...props}
			className={`
				h-12 w-12 rounded-md border text-center text-lg font-semibold hover:scale-110
				outline-none transition duration-500
				${isError}
				${className ?? ""}
			`}
		/>
	);
};

export { OTPInputField };

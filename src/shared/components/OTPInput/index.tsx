import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { FieldValues, Path } from "react-hook-form";
import { useVerifyEmailStore } from "#/lib/client/store";
import { OTPInputField } from "./components";
import { useOTPInputForm } from "./hooks";

type OTPInputProps<T extends FieldValues> = {
	name: Path<T>;
	length?: number;
	className?: string;
};

const OTPInput = <T extends FieldValues>({
	name,
	length,
	className,
}: OTPInputProps<T>) => {
	const { clearError } = useVerifyEmailStore();

	const { keys, error, getInputProps } = useOTPInputForm({
		name,
		length,
		className,
	});

	const [visibleError, setVisibleError] = useState(error);

	useEffect(() => {
		setVisibleError(error);

		if (!error) return;

		const timeout = setTimeout(() => {
			setVisibleError(undefined);
			clearError();
		}, 3000);

		return () => clearTimeout(timeout);
	}, [error, clearError]);

	return (
		<div className="space-y-2">
			<div className="flex justify-center gap-2">
				{keys.map((key, index) => {
					const {
						error: _error,
						onChange,
						...inputProps
					} = getInputProps(index);

					return (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.05 }}
						>
							<OTPInputField
								{...inputProps}
								error={!!visibleError}
								onChange={(event) => {
									setVisibleError(undefined);
									clearError();
									onChange?.(event);
								}}
							/>
						</motion.div>
					);
				})}
			</div>

			<AnimatePresence>
				{visibleError && (
					<motion.p
						initial={{ opacity: 0, y: -4 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -4 }}
						className="text-center text-xs text-red-500"
					>
						{visibleError.message}
					</motion.p>
				)}
			</AnimatePresence>
		</div>
	);
};

export { OTPInput };

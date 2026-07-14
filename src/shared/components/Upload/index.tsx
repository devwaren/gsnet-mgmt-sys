import {
	type FieldPath,
	type FieldValues,
	useController,
	useFormContext,
} from "react-hook-form";
import { useImageUploader } from "./hooks";

export interface UploadImageProps<
	TFieldValues extends FieldValues = FieldValues,
> {
	name: FieldPath<TFieldValues>;

	accept?: string;
	disabled?: boolean;
	className?: string;
	placeholder?: string;
}

export function UploadImage<TFieldValues extends FieldValues = FieldValues>({
	name,
	accept = "image/*",
	disabled,
	className,
	placeholder = "Click or drag an image here",
}: UploadImageProps<TFieldValues>) {
	const { control } = useFormContext<TFieldValues>();

	const {
		field: { value, onChange },
	} = useController({
		name,
		control,
	});

	const {
		preview,
		inputId,
		inputRef,
		handleChange,
		handleDrop,
		handleDragOver,
		removeImage,
	} = useImageUploader({
		value,
		onChange,
		disabled,
	});

	return (
		<div className={className}>
			<input
				ref={inputRef}
				id={inputId}
				type="file"
				accept={accept}
				hidden
				disabled={disabled}
				onChange={handleChange}
			/>

			<label
				htmlFor={inputId}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				className="flex h-32 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-300 transition hover:border-blue-500"
			>
				{preview ? (
					<img
						src={preview}
						alt="Preview"
						className="h-full w-full rounded-xl object-cover"
					/>
				) : (
					<p className="text-sm text-gray-500">{placeholder}</p>
				)}
			</label>

			{preview && (
				<div className="mt-3 flex gap-2 text-xs">
					<label
						htmlFor={inputId}
						className="cursor-pointer rounded bg-cyan-600 px-4 py-2 text-white"
					>
						Change
					</label>

					<button
						type="button"
						onClick={removeImage}
						className="rounded bg-red-400 px-4 py-2 text-white"
					>
						Remove
					</button>
				</div>
			)}
		</div>
	);
}

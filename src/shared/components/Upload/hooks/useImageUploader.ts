import { useEffect, useId, useRef, useState } from "react";
import type {
	FileSelector,
	HandleDragOverChange,
	HandleInputChange,
	UseImageUploaderOptions,
} from "../types";

export function useImageUploader({
	value,
	onChange,
	disabled,
}: UseImageUploaderOptions) {
	const inputId = useId();
	const inputRef = useRef<HTMLInputElement>(null);

	const [preview, setPreview] = useState<string>();

	useEffect(() => {
		if (!value) {
			setPreview(undefined);
			return;
		}

		const objectUrl = URL.createObjectURL(value);

		setPreview(objectUrl);

		return () => {
			URL.revokeObjectURL(objectUrl);
		};
	}, [value]);

	const setFile: FileSelector = (file) => {
		if (disabled || !file) return;

		onChange?.(file);
	};

	const handleChange: HandleInputChange = (e) => {
		setFile(e.target.files?.[0]);
	};

	const handleDrop: HandleDragOverChange = (e) => {
		e.preventDefault();

		setFile(e.dataTransfer.files?.[0]);
	};

	const handleDragOver: HandleDragOverChange = (e) => {
		e.preventDefault();
	};

	const removeImage = () => {
		onChange?.(null);

		if (inputRef.current) {
			inputRef.current.value = "";
		}
	};

	return {
		preview,
		inputId,
		inputRef,

		handleChange,
		handleDrop,
		handleDragOver,
		removeImage,
	};
}

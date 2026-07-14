import type { ChangeEvent, DragEvent } from "react";

export type UseImageUploaderOptions = {
	value?: File | null;
	onChange?:
		| Dispatch<SetStateAction<File | null>>
		| ((file: File | null) => void);
	disabled?: boolean;
};

export type FileSelector = (file?: File | null) => void;

export type HandleInputChange = (e: ChangeEvent<HTMLInputElement>) => void;

export type HandleDragOverChange = (e: DragEvent<HTMLLabelElement>) => void;

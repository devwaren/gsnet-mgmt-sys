export type HandleChangeFunction = (
	index: number,
	event: ChangeEvent<HTMLInputElement>,
) => void;

export type HandleKeyDownFunction = (
	index: number,
	event: KeyboardEvent<HTMLInputElement>,
) => void;

export type GetInputPropsFunction = (index: number) => {
	ref: (element: HTMLInputElement | null) => void;
	type: "text";
	inputMode: "numeric";
	maxLength: number;
	autoComplete: "one-time-code" | undefined;
	value: string;
	error: boolean;
	className: string | undefined;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
};

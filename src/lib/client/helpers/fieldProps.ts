import type { AnyFieldApi } from "@tanstack/react-form";
import type { ChangeEvent } from "react";

export function fieldProps(field: AnyFieldApi) {
	return {
		name: field.name,
		value: field.state.value ?? "",
		onBlur: field.handleBlur,
		onChange: (e: ChangeEvent<HTMLInputElement>) =>
			field.handleChange(e.target.value),
	};
}

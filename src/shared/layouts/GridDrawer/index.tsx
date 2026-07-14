import { gridCols, gridRows } from "./constants";
import type { GridDrawerProps } from "./types";

export function GridDrawer({
	columns = 1,
	rows = 1,
	children,
	className = "",
}: GridDrawerProps) {
	return (
		<div className={`grid ${gridCols[columns]} ${gridRows[rows]} ${className}`}>
			{children}
		</div>
	);
}

import type { gridCols, gridRows } from "../constants";

export type GridDrawerProps = {
	columns?: keyof typeof gridCols;
	rows?: keyof typeof gridRows;
	children: React.ReactNode;
	className?: string;
};

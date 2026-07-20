import type { MotionProps } from "motion/react";
import type { ReactNode } from "react";

type Preset = "fade" | "fadeUp" | "scale" | "fadeHover";

type MotionTextProps = MotionProps & {
	as: keyof HTMLElementTagNameMap;
	preset?: Preset;
	children?: ReactNode;
	className?: string;
};

export type { MotionTextProps, Preset };

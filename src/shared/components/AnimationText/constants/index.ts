import type { MotionProps } from "motion/react";

import type { Preset } from "../types";

const presets = {
	fade: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
	},
	fadeUp: {
		initial: { opacity: 0, y: 16 },
		animate: { opacity: 1, y: 0 },
	},
	scale: {
		initial: { opacity: 0, scale: 0.9 },
		animate: { opacity: 1, scale: 1 },
	},
	fadeHover: {
		initial: { opacity: 0 },
		animate: { opacity: 0.9 },
		whileHover: { opacity: 1 },
	},
} satisfies Record<
	Preset,
	Pick<MotionProps, "initial" | "animate" | "whileHover">
>;

export { presets };

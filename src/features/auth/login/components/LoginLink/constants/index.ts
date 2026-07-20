const styles = {
	text: "text-center text-xs text-white sm:text-sm space-x-2",
	link: "font-medium text-cyan-300 transition-colors hover:underline space-x-2",
} as const;

const animation = {
	container: {
		preset: "fadeUp",
		className: "flex flex-col items-center gap-4",
	},
	text: {
		preset: "fade",
		className: styles.text,
		transition: { delay: 0.2 },
	},
	link: {
		preset: "fadeUp",
		className: "inline-block",
		whileHover: { scale: 1.05 },
	},
	button: {
		whileHover: { scale: 1.02 },
		whileTap: { scale: 0.98 },
		className: "w-full",
	},
	forgotPassword: {
		preset: "fadeHover",
		className: styles.text,
		transition: { delay: 0.2 },
	},
} as const;

const buttonLoginSubmit = {
	type: "submit",
	variant: "secondary",
	size: "sm",
	className: "w-full",
} as const;

export { animation, styles, buttonLoginSubmit };

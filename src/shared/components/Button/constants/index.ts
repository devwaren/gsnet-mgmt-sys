import { cva } from "class-variance-authority";
import { styles } from "#/lib/client/helpers";

const base = styles(
	"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
	"disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
);

const variants = {
	variant: {
		default: "bg-blue-600 text-white hover:bg-blue-700",

		secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",

		destructive: "bg-red-600 text-white hover:bg-red-700",

		outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",

		ghost: "text-gray-900 hover:bg-gray-100",

		link: "text-blue-600 underline-offset-4 hover:underline",
	},
	size: {
		sm: "h-9 px-3",
		md: "h-10 px-4 py-2",
		lg: "h-11 px-8",
		icon: "h-10 w-10",
	},
} as const;

const defaultVariants = {
	variant: "default",
	size: "md",
} as const;

const buttonConfig = {
	base,
	variants,
	defaultVariants,
} as const;

const buttonVariants = cva(buttonConfig.base, {
	variants: buttonConfig.variants,
	defaultVariants: buttonConfig.defaultVariants,
});

export { buttonVariants };

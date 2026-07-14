import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: Parameters<typeof clsx>) => twMerge(clsx(inputs));

export { cn };

const styles = (...classes: string[]) => classes.join(" ");

export { styles };

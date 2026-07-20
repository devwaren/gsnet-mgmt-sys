import type { HTMLMotionProps } from "motion/react";
import { motion } from "motion/react";

export function AnimatedContainer(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      {...props}
    />
  );
}

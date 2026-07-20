import { motion } from "motion/react";

import { presets } from "./constants";
import type { MotionTextProps } from "./types";

export function AnimatedText({
  as,
  preset = "fade",
  children,
  className,
  ...props
}: MotionTextProps) {
  const Component = motion.create(as);
  const animation = presets[preset];

  return (
    <Component
      className={className}
      initial={animation.initial}
      animate={animation.animate}
      transition={{ delay: 0.2 }}
      {...props}>
      {children}
    </Component>
  );
}

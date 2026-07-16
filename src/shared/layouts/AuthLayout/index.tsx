import { motion } from "motion/react";
import type { ReactNode } from "react";

import { AuthTitle } from "#/shared/components";
import { DescriptionDetails } from "./components";
import { useInvertedPosition } from "./hooks";

type Position = "normal" | "inverted";

type AuthLayoutProps = {
  children: ReactNode;
  position?: Position;
};

export function AuthLayout({ children, position = "normal" }: AuthLayoutProps) {
  const { hero, imageX, formX, isInverted } = useInvertedPosition(position);

  return (
    <div className="grid min-h-dvh place-items-center bg-slate-200 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex w-full flex-col items-center justify-center rounded-xl border border-black/10 bg-white p-2 shadow-lg md:p-4 lg:min-h-[calc(40vh-3rem)] lg:max-w-2/3 lg:p-8">
        <div className="grid min-h-[45em] w-full overflow-hidden rounded-md bg-slate-600">
          <div
            className={`flex items-center text-black ${
              isInverted ? "flex-row-reverse" : "flex-row"
            }`}>
            <motion.div
              initial={{ opacity: 0, x: formX }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex-1 px-8 text-black">
              <AuthTitle />

              <div className="mt-6 w-full">{children}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: imageX }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative hidden h-full flex-1 items-end bg-cover lg:flex"
              style={{
                backgroundImage: `url("${hero.image}")`,
              }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative flex h-1/2 w-full flex-col justify-end bg-linear-to-t from-black via-black/50 to-transparent p-8 text-white">
                <DescriptionDetails position={position} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

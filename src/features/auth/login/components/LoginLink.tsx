import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { Button } from "#/shared/components";

export function LoginMenu() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center gap-4">
        <motion.div
          className="w-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            variant="secondary"
            size="sm"
            className="w-full">
            Login
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-xs text-white sm:text-sm">
          Don't have an account?{" "}
          <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
            <Link
              to="/register"
              className="font-medium text-cyan-300 transition-colors hover:underline">
              Register your PPP ID here
            </Link>
          </motion.span>
        </motion.p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 0.2 }}
        whileHover={{ opacity: 1 }}
        className="text-center text-xs text-white sm:text-sm">
        forgot password ?{" "}
        <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
          <Link
            to="/forgot-password"
            className="font-medium text-cyan-300 transition-colors hover:underline">
            Click here
          </Link>
        </motion.span>
      </motion.p>
    </>
  );
}

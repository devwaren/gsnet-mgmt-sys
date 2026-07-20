import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { AnimatedContainer, AnimatedText, Button } from "#/shared/components";
import { animation, buttonLoginSubmit, styles } from "./constants";

type Props = {
  isPending: boolean;
};

export function LoginMenu({ isPending }: Props) {
  return (
    <>
      <AnimatedContainer {...animation.container}>
        <motion.div {...animation.button}>
          <Button {...buttonLoginSubmit}>
            {isPending ? "Logged in..." : "Login"}
          </Button>
        </motion.div>

        <AnimatedText as="p" {...animation.text}>
          Don't have an account?{" "}
          <AnimatedText as="span" {...animation.link}>
            <Link to="/register" className={styles.link}>
              Register your PPP ID here
            </Link>
          </AnimatedText>
        </AnimatedText>
      </AnimatedContainer>

      <AnimatedText as="p" {...animation.forgotPassword}>
        Forgot password?{" "}
        <AnimatedText as="span" {...animation.link}>
          <Link to="/forgot-password" className={styles.link}>
            Click here
          </Link>
        </AnimatedText>
      </AnimatedText>
    </>
  );
}

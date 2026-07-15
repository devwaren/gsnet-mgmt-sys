import { motion } from "motion/react";

import { Input, Mapper } from "#/shared/components";
import { loginFields } from "../constants";

const loginFieldProps = {
  listFor: "Login form",
  items: loginFields,
  className: "space-y-2",
};

export function LoginFields() {
  return (
    <Mapper {...loginFieldProps}>
      {(item, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.35,
            delay: index * 0.08,
            ease: "easeOut",
          }}>
          <Input {...item} className="border-none bg-transparent" />
        </motion.div>
      )}
    </Mapper>
  );
}

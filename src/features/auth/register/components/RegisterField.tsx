import { motion } from "motion/react";
import { Input, Mapper, UploadImage } from "#/shared/components";
import { registerFields } from "../constants";

// Shared Mapper configuration for the register form fields.

const registerFieldProps = {
	listFor: "Register Form",
	items: registerFields,
	className: "grid grid-cols-2 gap-2",
};

export function RegisterFields() {
	return (
		<Mapper {...registerFieldProps}>
			{(item, index) => (
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.35,
						delay: index * 0.06,
						ease: "easeOut",
					}}
				>
					{item.type === "file" ? (
						<UploadImage {...item} />
					) : (
						<Input {...item} />
					)}
				</motion.div>
			)}
		</Mapper>
	);
}

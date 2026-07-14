import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export function ForgotPasswordLink() {
	return (
		<motion.p
			initial={{ opacity: 0 }}
			animate={{ opacity: 0.9 }}
			transition={{ delay: 0.2 }}
			whileHover={{ opacity: 1 }}
			className="text-center text-xs text-white sm:text-sm"
		>
			Already have an Account ?{" "}
			<motion.span whileHover={{ scale: 1.05 }} className="inline-block">
				<Link
					to="/login"
					className="font-medium text-cyan-300 transition-colors hover:underline"
				>
					Click here
				</Link>
			</motion.span>
		</motion.p>
	);
}

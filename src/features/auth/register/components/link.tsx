import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Button } from "#/shared/components";

export function RegisterMenu() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			className="flex flex-col items-center gap-4"
		>
			<motion.div
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				className="w-full"
			>
				<Button type="submit" variant="secondary" size="sm" className="w-full">
					Register
				</Button>
			</motion.div>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
				className="text-center text-xs text-white sm:text-sm"
			>
				Already have an account?{" "}
				<motion.span whileHover={{ scale: 1.05 }}>
					<Link
						to="/login"
						className="font-medium text-cyan-300 transition-colors hover:underline"
					>
						Login here
					</Link>
				</motion.span>
			</motion.p>
		</motion.div>
	);
}

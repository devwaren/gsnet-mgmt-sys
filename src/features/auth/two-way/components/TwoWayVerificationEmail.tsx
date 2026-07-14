import { motion } from "motion/react";

type TwoWayVerificationHeaderProps = {
	email: string;
};

export function TwoWayVerificationEmail({
	email,
}: TwoWayVerificationHeaderProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.4,
				ease: "easeOut",
			}}
			className="flex flex-col items-center"
		>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 0.2,
					duration: 0.3,
				}}
				className="mt-1 font-medium text-white"
			>
				{email}
			</motion.p>
		</motion.div>
	);
}

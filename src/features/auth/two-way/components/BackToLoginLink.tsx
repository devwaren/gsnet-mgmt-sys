import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function BackToLoginLink() {
	return (
		<Link
			to="/login"
			className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
		>
			<ArrowLeft className="h-4 w-4" />
			Back to Login
		</Link>
	);
}

import { Eye, EyeOff } from "lucide-react";
import { usePasswordStore } from "#/shared/store";

const PasswordButton = () => {
	const { showPassword, togglePassword } = usePasswordStore();
	return (
		<button
			type="button"
			onClick={togglePassword}
			className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
		>
			{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
		</button>
	);
};

export { PasswordButton };

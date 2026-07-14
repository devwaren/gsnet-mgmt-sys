type VerifyEmailHeaderProps = {
	email: string;
};

export function VerifyEmailHeader({ email }: VerifyEmailHeaderProps) {
	return (
		<>
			<h1 className="text-center text-3xl font-bold text-white">
				Verify your email
			</h1>

			<p className="mt-3 max-w-sm text-center text-sm leading-6 text-white/70">
				We've sent a 6-digit verification code to
			</p>

			<p className="mt-1 font-medium text-white">{email}</p>
		</>
	);
}

// Types

type ResendVerificationCodeServiceParams = {
	email: string;
	code?: string;
	otp?: string;
};

export type VerifyEmailServiceParams = {
	email: string;
	otp: string;
};

// Signature Types

export type ResendVerificationCodeFunction = ({
	email,
}: ResendVerificationCodeServiceParams) => void;

export type VerifyEmailSubmitFunction = ({
	email,
	code,
}: ResendVerificationCodeServiceParams) => void;

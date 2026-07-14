import { emailOTP } from "better-auth/plugins";

const emailOtpPlugin = emailOTP({
	sendVerificationOnSignUp: true,

	async sendVerificationOTP({ email, otp, type }) {
		console.log(email, otp, type);
	},
});

export { emailOtpPlugin };

import { cookiePlugin } from "./cookies.plugin";
import { emailOtpPlugin } from "./email-otp.plugin";
import { passKeyPlugin } from "./passkey.plugin";
import { phonePlugin } from "./phone.plugin";
import { twoFactorPlugin } from "./two-factor.plugin";

const plugins = [
	passKeyPlugin,
	phonePlugin,
	twoFactorPlugin,
	emailOtpPlugin,
	cookiePlugin,
];

export { plugins };

import type { GenerateOTPFunction } from "../types";

const STEP = 30;
const DIGITS = 6;

export const generateOTP: GenerateOTPFunction = async (otpSecret) => {
	const counter = Math.floor(Date.now() / 1000 / STEP);

	const buffer = new ArrayBuffer(8);
	const view = new DataView(buffer);
	view.setBigUint64(0, BigInt(counter), false);

	const key = await crypto.subtle.importKey(
		"raw",
		new TextEncoder().encode(otpSecret),
		{
			name: "HMAC",
			hash: "SHA-256",
		},
		false,
		["sign"],
	);

	const signature = await crypto.subtle.sign("HMAC", key, buffer);
	const hmac = new Uint8Array(signature);

	const offset = hmac[hmac.length - 1] & 0x0f;

	const binary =
		((hmac[offset] & 0x7f) << 24) |
		((hmac[offset + 1] & 0xff) << 16) |
		((hmac[offset + 2] & 0xff) << 8) |
		(hmac[offset + 3] & 0xff);

	return (binary % 1_000_000).toString().padStart(DIGITS, "0");
};

import { createServerFn } from "@tanstack/react-start";

export const generateOtp = createServerFn().handler(async () => {
	return generateOTP(process.env.OTP_SECRET as string);
});

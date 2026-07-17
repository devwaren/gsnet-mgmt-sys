import { passkey } from "@better-auth/passkey";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { emailOTP, phoneNumber, twoFactor } from "better-auth/plugins";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { Resend } from "resend";

import { TimeIn } from "#/lib/server/config/timeIn.ts";
import { clientMongo, hostnameUri } from "#/lib/server/env";
export type Auth = typeof auth;

export type AuthUser = typeof auth.$Infer.Session.user;
export const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
	secret: process.env.BETTER_AUTH_SECRET,
	baseURL: hostnameUri,
	basePath: "/api/v1/auth",
	session: {
		expiresIn: TimeIn.week,
		updateAge: TimeIn.day,
	},
	emailAndPassword: {
		enabled: true,
		sendResetPassword: async (data) => {
			await auth.api.requestPasswordReset({
				body: {
					email: data.user.email,
				},
			});
		},
	},
	user: {
		additionalFields: {
			pppId: {
				type: "string",
				required: true,
			},
			firstName: {
				type: "string",
				required: true,
			},
			lastName: {
				type: "string",
				required: true,
			},
			role: {
				type: "string",
				required: true,
				defaultValue: "client",
			},
		},
	},
	plugins: [
		passkey(),
		phoneNumber(),
		twoFactor(),
		emailOTP({
			sendVerificationOnSignUp: true,
			async sendVerificationOTP({ email, otp, type }) {
				console.log(email, otp, type);
				// domain is required to send email right away to the email recipients
			},
		}),
		tanstackStartCookies(),
	],
	database: mongodbAdapter(clientMongo.db("gsnet")),
});

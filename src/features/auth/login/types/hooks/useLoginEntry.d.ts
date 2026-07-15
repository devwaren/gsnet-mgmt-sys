import type { auth } from "#/lib/server";

export type AuthUser = typeof auth.$Infer.Session.user;

export type LoginEmail = {
	email: string;
	password: string;
};

export type LoginResponse = {
	user: AuthUser;
};

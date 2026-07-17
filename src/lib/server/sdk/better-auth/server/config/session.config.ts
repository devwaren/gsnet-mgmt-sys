import { TimeIn } from "#/lib/server/config";
import { hostnameUri } from "#/lib/server/env";

const sessionConfig = {
	secret: process.env.BETTER_AUTH_SECRET,
	baseURL: hostnameUri,
	basePath: "/api/v1/auth",
	session: {
		expiresIn: TimeIn.week,
		updateAge: TimeIn.day,
	},
};

export { sessionConfig };

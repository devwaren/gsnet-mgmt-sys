import { TimeIn } from "#/lib/server/config";

const sessionConfig = {
	session: {
		expiresIn: TimeIn.week,
		updateAge: TimeIn.day,
	},
};

export { sessionConfig };

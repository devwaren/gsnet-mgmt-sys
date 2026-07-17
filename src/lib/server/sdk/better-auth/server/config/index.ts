import { mongodbAdapter } from "better-auth/adapters/mongodb";

import { clientMongo } from "#/lib/server/env/index.ts";
import { emailAndPassword } from "./password.config";
import { plugins } from "./plugins";
import { sessionConfig } from "./session.config";
import { user } from "./user.config";

const authConfig = {
	baseURL: "http://localhost:3000",
	basePath: "/api/v1/auth",
	sessionConfig,
	emailAndPassword,
	user,
	plugins,
	database: mongodbAdapter(clientMongo.db("gsnet_db")),
} as const;

export { authConfig };

import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { clientMongo } from "#/lib/server/env";

const databaseConfig = {
	database: mongodbAdapter(clientMongo.db("gsnet")),
};

export { databaseConfig };

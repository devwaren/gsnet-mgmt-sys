import { mongodbAdapter } from "better-auth/adapters/mongodb";

import { clientMongo } from "#/lib/server/env";

export const database = mongodbAdapter(clientMongo.db("gsnet"));

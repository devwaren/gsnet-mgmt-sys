import { MongoClient } from "mongodb";

const clientMongo = new MongoClient(
	process.env.MONGODB_URI || "mongodb://localhost:27017",
);

const databaseName = process.env.CLOUD_DATABASE_NAME || "gsnet";

const hostnameUri = process.env.HOST_URI || "http://localhost:3000";

const db = clientMongo.db(databaseName);

const collection = {
	user: db.collection("user"),
};

export { clientMongo, databaseName, db, collection, hostnameUri };

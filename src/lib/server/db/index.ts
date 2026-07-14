import { db } from "../env";

type FindUserByEmailAndPppIdParams = {
	email: string;
	pppId: string;
};

export const userService = {
	findByEmailAndPppId: async ({
		email,
		pppId,
	}: FindUserByEmailAndPppIdParams) => {
		return db.collection("user").findOne({
			where: {
				email,
				pppId,
			},
		});
	},
};

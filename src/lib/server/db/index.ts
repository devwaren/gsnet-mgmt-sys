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

export const validatePppId = async (pppId: string, email: string) => {
	const ppp = await db.collection("pppIds").findOne({
		pppId,
		email,
	});

	if (!ppp) {
		throw new Error("PPP ID does not exist.");
	}

	return ppp;
};

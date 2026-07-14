import { authClient } from "../sdk/better-auth";

const useUserSession = () => {
	const { data: session } = authClient.useSession();

	const token = session?.session.token;
	const user = session?.user;

	return { token, user };
};

export { useUserSession };

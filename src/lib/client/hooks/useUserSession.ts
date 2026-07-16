import { authClient } from "../sdk/better-auth";

export const useUserSession = () => {
	const { data: session, isPending } = authClient.useSession();

	return {
		isPending,
		token: session?.session.token,
		user: session?.user,
		session: session?.session,
	};
};

import { create } from "zustand";

type VerifyEmailStore = {
	error: string | null;
	setError: (error: string | null) => void;
	clearError: () => void;
};

export const useVerifyEmailStore = create<VerifyEmailStore>((set) => ({
	error: null,
	setError: (error) => set({ error }),
	clearError: () => set({ error: null }),
}));

import { create } from "zustand";
import type { PasswordStore } from "./types";

const usePasswordStore = create<PasswordStore>((set) => ({
	showPassword: false,
	togglePassword: () => set((state) => ({ showPassword: !state.showPassword })),
	setShowPassword: (value: boolean) => set(() => ({ showPassword: value })),
}));

export { usePasswordStore };

import { create } from "zustand";

type UseMessage = {
	error: string | undefined;
	message: string | undefined;

	set_error: (error: string | undefined) => void;
	set_message: (message: string | undefined) => void;
};

export const useMessage = create<UseMessage>((set) => ({
	error: undefined,
	message: undefined,

	set_error: (error: string | undefined) => set({ error }),
	set_message: (message: string | undefined) => set({ message }),
}));

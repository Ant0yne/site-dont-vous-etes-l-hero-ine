//cSpell: words zustand

import { create } from "zustand";

export type PathState = {
	connectionPath: string;
	saveConnectionPath: (path: string) => void;
};

export const useConnectionStore = create<PathState>()((set) => ({
	connectionPath: "/",
	saveConnectionPath: (path) => set((state) => ({ connectionPath: path })),
}));

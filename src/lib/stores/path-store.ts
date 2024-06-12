//cSpell: words zustand

import { create } from "zustand";

export type PathState = {
	lastPath: string;
	saveLastPath: (path: string) => void;
};

export const usePathStore = create<PathState>()((set) => ({
	lastPath: "/",
	saveLastPath: (path) => set((state) => ({ lastPath: path })),
}));

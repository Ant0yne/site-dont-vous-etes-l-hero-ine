//cSpell: words zustand

import { createStore } from "zustand";

export type CharacterState = {
	dex: number;
};

export const createCharacterStore = () => {
	return createStore<CharacterState>()((set) => ({
		dex: 6,
	}));
};

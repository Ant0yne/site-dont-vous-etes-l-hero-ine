//cSpell: words zustand

import { create } from "zustand";

export type CharacterState = {
	DEX: number;
};

export const useCharacterStore = create<CharacterState>()((set) => ({
	DEX: 2,
}));

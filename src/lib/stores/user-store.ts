//cSpell: words zustand

import { create } from "zustand";

export type UserState = {
	username: string;
	email: string;
	_id: string;
};

export type UserStore = UserState & {
	saveUser: (user: UserState) => void;
};

export const useUserStore = create<UserStore>()((set) => ({
	username: "",
	email: "",
	_id: "",
	saveUser: (user) =>
		set((state) => ({
			username: user.username,
			email: user.email,
			_id: user._id,
		})),
}));

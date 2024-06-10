import { Account, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { use } from "react";

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	// FIXME: param types
	callbacks: {
		async signIn({ user, account }: { user: any; account: any }) {
			if (account.provider === "google") {
				const { name } = user;

				try {
					const res = await fetch(`${process.env.API_LINK}/api/user`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							username: name,
						}),
					});
					if (res.ok) {
						return user;
					}
				} catch (error) {
					console.error("Impossible to sign in with Google provider", error);
				}
			}
			return user;
		},
	},
};

import GoogleProvider from "next-auth/providers/google";
import dbConnect from "./mongoDB/dbConnect";
import User from "./mongoDB/models/User";

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
				const { name, email } = user;

				try {
					const res = await fetch(`${process.env.API_LINK}/api/register`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							username: name,
							email,
							password: "",
						}),
					});
					if (res.ok) {
						console.log(res.statusText);
					} else {
						console.error(res.statusText);
					}
				} catch (error) {
					return console.error("Impossible to sign in", error);
				}
			}
			return user;
		},
	},
};

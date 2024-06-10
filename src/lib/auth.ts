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
			console.log("user ===>", user);
			console.log("account ===>", account);

			if (account.provider === "google") {
				const { name, email } = user;

				try {
					await dbConnect();

					const userFound = await User.findOne({
						email,
					});

					if (!userFound) {
						const res = await fetch(`${process.env.API_LINK}/api/user`, {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								username: name,
								email,
							}),
						});
						// if (res.ok) {
						// 	return user;
						// }
					}
				} catch (error) {
					return console.error("Impossible to sign in", error);
				}
			}
			return user;
		},
	},
};

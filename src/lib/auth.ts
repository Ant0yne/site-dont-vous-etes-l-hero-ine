import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "./mongoDB/dbConnect";
import User from "./mongoDB/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		CredentialsProvider({
			name: "identifiants",
			credentials: {},
			// FIXME: Types
			async authorize(credentials: any) {
				const { email, password } = credentials;
				try {
					await dbConnect();
					const userFound = await User.findOne({ email });

					if (!userFound) {
						return null;
					} else {
						const pwMatch = await bcrypt.compare(password, userFound.password);
						if (!pwMatch) {
							return null;
						}
						return userFound;
					}
				} catch (error) {
					console.error(error);
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	pages: { signIn: "/connection" },
	// FIXME: param types
	callbacks: {
		async signIn({ user, account }: { user: any; account: any }) {
			if (account.provider === "google") {
				const { name, email } = user;

				try {
					const userSearch = await fetch(
						`${process.env.API_LINK}/api/userExists`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ email }),
						}
					);

					const { userFound } = await userSearch.json();

					if (!userFound) {
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
					}
				} catch (error) {
					return console.error("Impossible to sign in", error);
				}
			}
			return user;
		},
	},
};

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		CredentialsProvider({
			name: "Identifiants",
			credentials: {
				email: { label: "Email", type: "email", placeholder: "Votre email" },
				password: {
					label: "Password",
					type: "password",
					placeholder: "Votre password",
				},
			},
			async authorize(credentials) {
				const user = { id: "1" };
				return user;
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

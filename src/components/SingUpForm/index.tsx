"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignUpForm = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError("");

		if (!username || !email || !password) {
			setError("Tous les champs doivent être remplis");
			return;
		}
		try {
			const userSearch = await fetch("api/userExists", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const { userFound } = await userSearch.json();

			if (userFound) {
				setError("User already exists.");
				return;
			}

			const res = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					email,
					password,
				}),
			});

			if (res.ok) {
				const connection = await signIn("credentials", {
					email,
					password,
					redirect: false,
				});
				if (connection?.error) {
					setError("Erreur de connexion");
					return;
				} else {
					setUsername("");
					setEmail("");
					setPassword("");
					router.replace("/profile");
					router.refresh();
				}
			} else {
				console.error(res.statusText);
			}
		} catch (error) {
			console.error("Something went wrong during registration", error);
		}
	};

	return (
		<>
			<h1>SignUpForm</h1>
			{error ? <p className="text-red-600">{error}</p> : null}
			<form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
				<input
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setUsername(e.target.value)
					}
					type="text"
					placeholder="Character Name"
					value={username}
				/>
				<input
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setEmail(e.target.value)
					}
					type="email"
					placeholder="Email"
					value={email}
				/>
				<input
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setPassword(e.target.value)
					}
					type="password"
					placeholder="Password"
					value={password}
				/>
				<Button>Créer le compte</Button>
			</form>
		</>
	);
};

export default SignUpForm;

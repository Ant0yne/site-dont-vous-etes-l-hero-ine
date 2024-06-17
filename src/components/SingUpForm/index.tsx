"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";

const SignUpForm = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!username || !email || !password) {
			setError("Tous les champs doivent être remplis");
			return;
		}
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_LINK}/api/register`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						username,
						email,
					}),
				}
			);

			console.log(res);

			if (res.ok) {
				setUsername("");
				setEmail("");
				setPassword("");
				console.log(res.statusText);
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

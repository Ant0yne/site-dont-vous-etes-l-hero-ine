"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});

			if (res?.error) {
				setError("Email ou Mot de passe erroné.");
				return;
			} else {
				router.replace("/profile");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h1> LoginForm</h1>
			{error ? <p className="text-red-600">{error}</p> : null}
			<form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
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
				<Button>Se connecter</Button>
			</form>
		</>
	);
};

export default LoginForm;

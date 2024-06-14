"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";

const SignUpForm = () => {
	const [characName, setCharacName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (!characName || !email || !password) {
			setError("Tous les champs doivent être remplis");
			return;
		}
		console.log("ok");
	};

	return (
		<>
			<h1>SignUpForm</h1>
			{error ? <p className="text-red-600">{error}</p> : null}
			<form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
				<input
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setCharacName(e.target.value)
					}
					type="text"
					placeholder="Character Name"
				/>
				<input
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setEmail(e.target.value)
					}
					type="email"
					placeholder="Email"
				/>
				<input
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setPassword(e.target.value)
					}
					type="password"
					placeholder="Password"
				/>
				<Button>Créer le compte</Button>
			</form>
		</>
	);
};

export default SignUpForm;

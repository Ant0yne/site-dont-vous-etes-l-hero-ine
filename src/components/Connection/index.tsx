"use client";

import Login from "../Login";
import SignLog from "../SignLog";
import Signup from "../Signup";
import { useSession } from "next-auth/react";

const Connection = () => {
	const { status } = useSession();

	return (
		<>
			{status === "authenticated" ? (
				<p>Vous êtes déjà connecté !</p>
			) : (
				<>
					<Login />
					<Signup />
					<SignLog />
				</>
			)}
		</>
	);
};

export default Connection;

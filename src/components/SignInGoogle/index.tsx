"use client";

import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInGoogle = () => {
	const { status } = useSession();

	return (
		<>
			{status === "authenticated" ? (
				<Button onClick={() => signOut()}>Sign out</Button>
			) : (
				<Button onClick={() => signIn("google")}>Sign in with Google</Button>
			)}
		</>
	);
};

export default SignInGoogle;

"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const SignInGithub = () => {
	return (
		<Button onClick={() => signIn("github", { callbackUrl: "/profile" })}>
			Sign in with Github
		</Button>
	);
};

export default SignInGithub;

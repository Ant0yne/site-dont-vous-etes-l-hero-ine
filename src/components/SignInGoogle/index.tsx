"use client";

import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const SignInGoogle = () => {
	return <Button onClick={() => signIn("google")}>Sign in with Google</Button>;
};

export default SignInGoogle;

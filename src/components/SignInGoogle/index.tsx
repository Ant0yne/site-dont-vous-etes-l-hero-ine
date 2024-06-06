"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInGoogle = () => {
	const { status, data } = useSession();

	return (
		<>
			{status === "authenticated" ? (
				<div>
					<Image
						src={data?.user?.image!}
						width={50}
						height={50}
						alt="Your profile picture"
					/>
					<Button onClick={() => signOut()}>Sign out</Button>
				</div>
			) : (
				<Button onClick={() => signIn("google")}>Sign in with Google</Button>
			)}
		</>
	);
};

export default SignInGoogle;

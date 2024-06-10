"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInGoogle = () => {
	const { status, data } = useSession();
	const router = useRouter();

	const handleSignOut = async () => {
		const path = await signOut({ redirect: false, callbackUrl: "/" });
		router.push(path.url);
	};

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
					<Button onClick={handleSignOut}>Sign out</Button>
				</div>
			) : (
				<Button onClick={() => signIn("google")}>Sign in with Google</Button>
			)}
		</>
	);
};

export default SignInGoogle;

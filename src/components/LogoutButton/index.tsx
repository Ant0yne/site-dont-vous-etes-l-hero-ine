"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";

const LogoutButton = () => {
	const pathname = usePathname();
	const router = useRouter();

	const handleSignOut = async () => {
		const path = await signOut({ redirect: false, callbackUrl: pathname });
		router.push(path.url);
		router.refresh();
	};

	return (
		<div>
			<Button onClick={handleSignOut}>Se déconnecter</Button>
		</div>
	);
};

export default LogoutButton;

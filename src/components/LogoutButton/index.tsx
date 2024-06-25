"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { UserState, useUserStore } from "@/lib/stores/user-store";
import { useEffect } from "react";

const LogoutButton = ({ user }: { user: UserState | null }) => {
	const pathname = usePathname();
	const router = useRouter();

	const setUser = useUserStore((state) => state.saveUser);

	useEffect(() => {
		console.log("useEffect Header");

		if (user?.username && user?.email && user?._id) {
			console.log("useEffect set state");
			setUser({ username: user.username, email: user.email, _id: user._id });
		}
	}, []);

	const handleSignOut = async () => {
		const path = await signOut({ redirect: false, callbackUrl: pathname });
		router.push("/");
		router.refresh();
	};

	return (
		<div>
			<Button onClick={handleSignOut}>Se déconnecter</Button>
		</div>
	);
};

export default LogoutButton;

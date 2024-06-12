"use client";

import { usePathStore } from "@/lib/stores/path-store";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const SignLogButton = () => {
	const setLastPath = usePathStore((state) => state.saveLastPath);

	const pathname = usePathname();

	const router = useRouter();

	const handleLastPath = (path: string) => {
		setLastPath(pathname);
		router.push(path);
	};

	return (
		<div>
			<Button onClick={() => handleLastPath("/login")}>Se connecter</Button>
			<Button onClick={() => handleLastPath("/signup")}>S'inscrire</Button>
		</div>
	);
};

export default SignLogButton;

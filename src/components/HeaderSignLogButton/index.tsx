"use client";

import { useConnectionStore } from "@/lib/stores/connection-store";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const HeaderSignLogButton = () => {
	const setConnectionPath = useConnectionStore(
		(state) => state.saveConnectionPath
	);
	const router = useRouter();

	const handleConnectionPath = (path: string) => {
		setConnectionPath(path);
		router.push("/connection");
	};

	return (
		<div>
			<Button onClick={() => handleConnectionPath("login")}>
				Se connecter
			</Button>
			<Button onClick={() => handleConnectionPath("signup")}>S'inscrire</Button>
		</div>
	);
};

export default HeaderSignLogButton;

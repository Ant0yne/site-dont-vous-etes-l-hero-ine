"use client";

import { Button } from "../ui/button";
import { useConnectionStore } from "@/lib/stores/connection-store";

const SignLog = () => {
	const connecPath = useConnectionStore((state) => state.connectionPath);
	const setConnectionPath = useConnectionStore(
		(state) => state.saveConnectionPath
	);

	const handleConnectionPath = () => {
		connecPath === "signup"
			? setConnectionPath("login")
			: setConnectionPath("signup");
	};

	return (
		<div>
			<Button onClick={handleConnectionPath}>
				{connecPath === "signup" ? "Se connecter" : "S'inscrire"}
			</Button>
		</div>
	);
};

export default SignLog;

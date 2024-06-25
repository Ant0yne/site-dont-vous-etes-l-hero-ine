"use client";

import { useConnectionStore } from "@/lib/stores/connection-store";
import SignInGoogle from "../SignInGoogle";
import LoginForm from "../LoginForm";
import SignInGithub from "../SignInGithub";

const Login = () => {
	const connectionPath = useConnectionStore((state) => state.connectionPath);
	return (
		<div>
			{connectionPath === "login" ? (
				<>
					<LoginForm />
					<SignInGoogle />
					<SignInGithub />
				</>
			) : null}
		</div>
	);
};

export default Login;

"use client";

import { useConnectionStore } from "@/lib/stores/connection-store";
import SignInGoogle from "../SignInGoogle";

const Login = () => {
	const connectionPath = useConnectionStore((state) => state.connectionPath);
	return <div>{connectionPath === "login" ? <SignInGoogle /> : null}</div>;
};

export default Login;

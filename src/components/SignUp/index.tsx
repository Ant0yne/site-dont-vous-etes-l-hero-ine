"use client";

import { useConnectionStore } from "@/lib/stores/connection-store";
import SignUpForm from "../SingUpForm";

const Signup = () => {
	const connectionPath = useConnectionStore((state) => state.connectionPath);

	return <div>{connectionPath === "signup" ? <SignUpForm /> : null}</div>;
};

export default Signup;

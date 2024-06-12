import SignInGoogle from "@/components/SignInGoogle";
import SignLog from "../SignLog";

const Login = () => {
	return (
		<>
			<SignInGoogle />
			<SignLog path={"signup"} />
		</>
	);
};

export default Login;

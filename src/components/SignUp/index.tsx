import SignUpForm from "@/components/SingUpForm";
import SignLog from "../SignLog";

const SignUp = () => {
	return (
		<>
			<SignUpForm />
			<SignLog path={"login"} />
		</>
	);
};

export default SignUp;

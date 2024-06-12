import Modal from "@/components/Modal/Modal";
import SignLog from "@/components/SignLog";
import SignUp from "@/components/SignUp";

const ModalSignup = ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	return (
		<Modal>
			<SignUp />
			<SignLog path={"login"} />
		</Modal>
	);
};

export default ModalSignup;

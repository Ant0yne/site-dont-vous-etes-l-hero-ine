import Connection from "@/components/Connection";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const PageConnection = async () => {
	const session = await getServerSession(authOptions);
	if (session) {
		redirect("/profile");
	}
	return (
		<main>
			<Connection />
		</main>
	);
};

export default PageConnection;

import Profile from "@/components/Profile";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const PageProfile = async () => {
	// const session = await getServerSession(authOptions);
	// let user: UserState | null = null;

	// try {
	// 	await dbConnect();
	// 	const userFound = await User.findOne({
	// 		email: session?.user?.email,
	// 	}).select("username email _id");
	// 	if (userFound) {
	// 		user = {
	// 			username: userFound.username,
	// 			email: userFound.email,
	// 			_id: userFound._id.toString(),
	// 		};
	// 	}
	// } catch (error: any) {
	// 	console.error({ message: error.message });
	// }

	// if (!user) {
	// 	notFound();
	// }

	return (
		<div>
			<Profile />
			<Link href="/profile/character">
				<Button>Fiche de personnage</Button>
			</Link>
			<Link href="/profile/progress">
				<Button>Progression</Button>
			</Link>
			<Link href="/profile/path">
				<Button>Chemin parcouru</Button>
			</Link>
		</div>
	);
};

export default PageProfile;

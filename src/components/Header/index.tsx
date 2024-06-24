// cSpell: words signup

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Waypoints } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import HeaderSignLogButton from "../HeaderSignLogButton";
import LogoutButton from "../LogoutButton";
import { UserState } from "@/lib/stores/user-store";
import dbConnect from "@/lib/mongoDB/dbConnect";
import User from "@/lib/mongoDB/models/User";

const RootHeader = async () => {
	const session = await getServerSession(authOptions);
	let user: UserState | null = null;

	try {
		await dbConnect();
		console.log("search user in DB for Header");

		const userFound = await User.findOne({
			email: session?.user?.email,
		}).select("username email _id");
		if (userFound) {
			user = {
				username: userFound.username,
				email: userFound.email,
				_id: userFound._id.toString(),
			};
		}
	} catch (error: any) {
		console.error({ message: error.message });
	}

	return (
		<header className="flex border-b p-2 mb-1">
			<Link href="/">
				<Image
					src="https://res.cloudinary.com/dxyptix0d/image/upload/v1716718047/portfolioHero/Logo.png"
					width={50}
					height={50}
					alt="Logo"
				/>
			</Link>

			<nav>
				{session ? (
					<>
						<Link href="/profile">
							<Button variant="outline">
								<Waypoints strokeWidth="1" className="mr-2" /> Profile
							</Button>
						</Link>
						<LogoutButton user={user} />
					</>
				) : (
					<HeaderSignLogButton />
				)}
			</nav>
		</header>
	);
};

export default RootHeader;

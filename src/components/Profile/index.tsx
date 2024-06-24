"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

import { UserState, useUserStore } from "@/lib/stores/user-store";

const Profile = ({ user }: { user: UserState | null }) => {
	const { status, data } = useSession();
	console.log("data", data);

	return (
		<>
			{status === "authenticated" ? (
				<>
					<p>{user?.email}</p>
					<p>{user?.username}</p>
					{data?.user?.image ? (
						<div>
							<Image
								src={data.user.image}
								width={50}
								height={50}
								alt="Your profile picture"
							/>
						</div>
					) : null}
				</>
			) : (
				<div>Profile</div>
			)}
		</>
	);
};

export default Profile;

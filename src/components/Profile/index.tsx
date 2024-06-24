"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

import { UserState, useUserStore } from "@/lib/stores/user-store";
import { useEffect } from "react";

const Profile = ({ user }: { user: UserState | null }) => {
	const { status, data } = useSession();
	const setUser = useUserStore((state) => state.saveUser);

	useEffect(() => {
		if (user?.username && user?.email && user?._id)
			setUser({ username: user.username, email: user.email, _id: user._id });
	}, []);

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

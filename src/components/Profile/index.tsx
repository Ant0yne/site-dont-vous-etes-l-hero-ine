"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

import { useUserStore } from "@/lib/stores/user-store";

const Profile = () => {
	const { status, data } = useSession();
	const username = useUserStore((state) => state.username);
	const email = useUserStore((state) => state.email);
	// const setUser = useUserStore((state) => state.saveUser);

	// useEffect(() => {
	// 	if (user?.username && user?.email && user?._id)
	// 		setUser({ username: user.username, email: user.email, _id: user._id });
	// }, []);

	return (
		<>
			{status === "authenticated" ? (
				<>
					<p>{email}</p>
					<p>{username}</p>
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

"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
	const { status, data } = useSession();
	return (
		<>
			{status === "authenticated" ? (
				<div>
					<Image
						src={data?.user?.image!}
						width={50}
						height={50}
						alt="Your profile picture"
					/>
				</div>
			) : (
				<div>Profile</div>
			)}
		</>
	);
};

export default Profile;

"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
	const { status, data } = useSession();
	console.log("status ===>", status);
	console.log("data ===>", data);

	return (
		<>
			{status === "authenticated" ? (
				<>
					<p>{data?.user?.email}</p>
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

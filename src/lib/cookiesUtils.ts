"use server";

import { cookies } from "next/headers";
const cookieStore = cookies();

const GetPathIdCookie = () => {
	const pathIdCookie = cookieStore.get("path_id");

	return pathIdCookie?.value;
};

export { GetPathIdCookie };

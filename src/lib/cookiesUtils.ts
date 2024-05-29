"use server";
import { cookies } from "next/headers";

const SetPathIdCookie = async (params: string) => {
	const cookieStore = cookies();
	await cookieStore.set("step_id", params);
};

export { SetPathIdCookie };

import { NextRequest } from "next/server";
import { SetPathIdCookie } from "@/lib/cookiesUtils";

export function middleware(req: NextRequest) {
	console.log(req);
	return null;
}

export const config = {
	matcher: "/adventure",
};

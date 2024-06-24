import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, event: NextFetchEvent) {
	if (req.url.includes("adventure")) {
		const response = NextResponse.next();

		const step = req.url.split("/");
		const expireTime = Date.now() + 24 * 60 * 60 * 1000 * 15;
		response.cookies.set("step_id", step[step.length - 1], {
			expires: expireTime,
		});
		return response;
	}
	if (req.url.includes("profile")) {
		if (!req.cookies.has("next-auth.session-token")) {
			return NextResponse.redirect(new URL("/", req.url));
		}
	}
	if (req.url.includes("connection")) {
		if (req.cookies.has("next-auth.session-token")) {
			return NextResponse.redirect(new URL("/profile", req.url));
		}
	}
	return null;
}

export const config = {
	matcher: ["/adventure/(.*)", "/profile", "/connection"],
};

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	if (req.url.includes("adventure")) {
		const response = NextResponse.next();

		const step = req.url.split("/");
		const expireTime = Date.now() + 24 * 60 * 60 * 1000 * 15;
		response.cookies.set("step_id", step[step.length - 1], {
			expires: expireTime,
		});
		return response;
	}

	return null;
}

export const config = {
	matcher: "/adventure/(.*)",
};

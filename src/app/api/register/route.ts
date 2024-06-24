import bcrypt from "bcryptjs";

import dbConnect from "@/lib/mongoDB/dbConnect";
import User from "@/lib/mongoDB/models/User";

export async function POST(req: Request) {
	let { username, email, password } = await req.json();

	try {
		await dbConnect();

		if (password) {
			const hashedPass = await bcrypt.hash(password, 10);
			password = hashedPass;
		} else {
			password = null;
		}

		await User.create({ username, email, password });

		return Response.json(`${username} is now register`, {
			status: 200,
			statusText: `${username} is now register`,
		});
	} catch (error) {
		return Response.json(`Error when creating user in DB: ${error}`, {
			status: 500,
			statusText: `Error when creating user in DB: ${error}`,
		});
	}
}

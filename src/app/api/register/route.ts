import bcrypt from "bcryptjs";

import dbConnect from "@/lib/mongoDB/dbConnect";
import User from "@/lib/mongoDB/models/User";
import Character from "@/lib/mongoDB/models/Character";

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

		const user = await User.create({
			username,
			email,
			password,
			characterId: null,
		});

		const character = await Character.create({
			characName: username,
			DEX: 5,
		});

		user.characterId = character._id;

		user.save();

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

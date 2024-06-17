import dbConnect from "@/lib/mongoDB/dbConnect";
import User from "@/lib/mongoDB/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
	let { username, email, password } = await req.json();

	try {
		await dbConnect();
		const userFound = await User.findOne({
			email,
		});

		if (!userFound) {
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
		} else {
			return Response.json("User already exist", {
				status: 400,
				statusText: "User already exist",
			});
		}
	} catch (error) {
		return Response.json(`Error when creating user in DB: ${error}`, {
			status: 500,
			statusText: `Error when creating user in DB: ${error}`,
		});
	}
}

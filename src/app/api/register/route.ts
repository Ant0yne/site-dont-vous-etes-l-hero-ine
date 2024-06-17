import dbConnect from "@/lib/mongoDB/dbConnect";
import User from "@/lib/mongoDB/models/User";
import { ok } from "assert";

export async function POST(req: Request) {
	const { username, email, password } = await req.json();

	try {
		await dbConnect();
		const userFound = await User.findOne({
			email,
		});
		console.log("userfound ===>", userFound);

		if (!userFound) {
			await User.create({ username, email });
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
		});
	}
}

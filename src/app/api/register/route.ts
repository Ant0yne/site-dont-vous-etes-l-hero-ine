import dbConnect from "@/lib/mongoDB/dbConnect";
import User from "@/lib/mongoDB/models/User";

export async function POST(req: Request) {
	const { username, email } = await req.json();

	try {
		await dbConnect();
		await User.create({ username: username, email });
		return Response.json(`${username} is now register`, { status: 200 });
	} catch (error) {
		return Response.json(`Error when creating user in DB: ${error}`, {
			status: 200,
		});
	}
}

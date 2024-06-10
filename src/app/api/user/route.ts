import dbConnect from "@/lib/mongoDB/dbConnect";
import User from "@/lib/mongoDB/models/User";

export async function POST(req: Request) {
	const { name } = await req.json();
	try {
		await dbConnect();
		await User.create({ username: name });
		return Response.json(`${name} is now register`, { status: 200 });
	} catch (error) {}
}

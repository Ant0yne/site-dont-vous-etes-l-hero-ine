import dbConnect from "@/lib/mongoDB/dbConnect";
import User from "@/lib/mongoDB/models/User";

export async function POST(req: Request) {
	try {
		await dbConnect();
		const { email } = await req.json();
		const userFound = await User.findOne({
			email,
		}).select("username _id");
		console.log(userFound);
		return Response.json({ userFound });
	} catch (error) {
		console.error(error);
	}
}

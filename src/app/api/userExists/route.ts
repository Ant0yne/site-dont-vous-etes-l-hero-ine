import dbConnect from "@/lib/mongoDB/dbConnect";
import User from "@/lib/mongoDB/models/User";

export async function POST(req: Request) {
	try {
		await dbConnect();
		const { email } = await req.json();
		const userFound = await User.findOne({
			email,
		}).select("email username _id");
		return Response.json({ userFound });
	} catch (error) {
		console.error(error);
		return Response.json({ error });
	}
}

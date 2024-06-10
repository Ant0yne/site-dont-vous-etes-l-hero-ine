import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

export default async function dbConnect() {
	if (connection.isConnected) {
		return;
	}

	try {
		const db = await mongoose.connect(process.env.MONGODB_URI!);
		connection.isConnected = db.connections[0].readyState;
	} catch (error) {
		console.log("Error connecting to DB: ", error);
	}
}

import { Schema, model } from "mongoose";

interface IUser {
	token: string;
}

const userSchema = new Schema<IUser>({
	token: {
		type: String,
		required: true,
	},
});

const User = model<IUser>("User", userSchema);

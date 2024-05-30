import mongoose, { Schema, model } from "mongoose";

interface IUser {
	token: string;
}

const userSchema = new Schema<IUser>({
	token: {
		type: String,
		required: true,
	},
});

const User = mongoose.models.Step || model<IUser>("User", userSchema);

export default User;

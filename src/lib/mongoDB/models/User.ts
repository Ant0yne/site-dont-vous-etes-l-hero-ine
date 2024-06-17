import { Schema, model, models } from "mongoose";
import { TUser } from "@/lib/types";

const userSchema = new Schema<TUser>(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
		},
	},
	{ timestamps: true }
);

const User = models.User || model<TUser>("User", userSchema);

export default User;

import { Schema, model, models } from "mongoose";
import { TUser } from "@/lib/types";

const userSchema = new Schema<TUser>(
	{
		username: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const User = models.User || model<TUser>("User", userSchema);

export default User;

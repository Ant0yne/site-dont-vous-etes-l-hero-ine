import mongoose, { Schema, model, models } from "mongoose";
import type { TUser } from "@/lib/types";

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
		characterId: {
			type: mongoose.Schema.Types.ObjectId,
		},
	},
	{ timestamps: true }
);

const User = models.User || model<TUser>("User", userSchema);

export default User;

import { TStep } from "@/lib/types";
import mongoose, { Schema, model } from "mongoose";

const stepSchema = new Schema<TStep>({
	stepNum: {
		type: Number,
		required: true,
	},
	image: {
		type: Schema.Types.Mixed,
		required: true,
		default: null,
	},
	description: {
		type: String,
		required: true,
	},
	nextSteps: {
		type: [
			{
				description: { type: String },
				stepNum: { type: Number },
			},
		],
		required: false,
	},
});

const Step = mongoose.models.Step || model<TStep>("Step", stepSchema);

export default Step;

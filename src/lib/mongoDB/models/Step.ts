import { Schema, model } from "mongoose";

interface IStep {
	stepNum: number;
	image: string;
	description: string;
}

const stepSchema = new Schema<IStep>({
	stepNum: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
	},
	description: {
		type: String,
		required: true,
	},
});

const Step = model<IStep>("Step", stepSchema);

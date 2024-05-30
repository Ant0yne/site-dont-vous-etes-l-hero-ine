import mongoose, { Schema, model } from "mongoose";

type NextStep = {
	description: string;
	stepNum: number;
};

interface IStep {
	stepNum: number;
	image: string;
	description: string;
	nextSteps: NextStep[];
}

const stepSchema = new Schema<IStep>({
	stepNum: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: true,
	},
	nextSteps: {
		type: [{ String, Number }],
		required: false,
	},
});

const Step = mongoose.models.Step || model<IStep>("Step", stepSchema);

export default Step;

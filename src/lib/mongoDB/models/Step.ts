import { TStep, TStepSteps, TStepTest } from "@/lib/types";
import mongoose, { Schema, model } from "mongoose";

const stepsSchema = new Schema<TStepSteps>({
	description: { type: String },
	nextStepNum: { type: Number },
});

const testSchema = new Schema<TStepTest>({
	type: { type: String },
	objectif: { type: Number },
	successStep: { type: Number },
	failStep: { type: Number },
});

const stepSchema = new Schema<TStep>({
	stepNum: {
		type: Number,
		required: [true, "stepNum is required"],
	},
	image: {
		type: Schema.Types.Mixed,
		required: [true, "image is required"],
		default: null,
	},
	description: {
		type: String,
		required: [true, "description is required"],
	},
	nextSteps: {
		steps: { type: [stepsSchema], required: false },
		test: {
			type: testSchema,
			required: false,
		},
	},
});

const Step = mongoose.models.Step || model<TStep>("Step", stepSchema);

export default Step;

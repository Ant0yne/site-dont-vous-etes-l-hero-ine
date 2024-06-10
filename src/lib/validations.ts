import { z } from "zod";

// STEPS

export const stepsZod = z.object({
	description: z.string(),
	nextStepNum: z.number(),
});

export const testZod = z.object({
	type: z.string(),
	objectif: z.number(),
	successStep: z.number(),
	failStep: z.number(),
});

export const stepZod = z.object({
	stepNum: z.number(),
	image: z.object({}).nullable(),
	description: z.string(),
	nextSteps: z.object({
		steps: z.optional(z.array(stepsZod)),
		test: z.optional(testZod),
	}),
});

// USER

export const userZod = z.object({
	username: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

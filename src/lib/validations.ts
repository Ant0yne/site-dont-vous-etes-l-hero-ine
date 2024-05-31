import { z } from "zod";

export const stepZod = z.object({
	stepNum: z.number(),
	image: z.null(),
	description: z.string(),
	nextSteps: z.optional(
		z.array(
			z.object({
				description: z.string(),
				stepNum: z.number(),
			})
		)
	),
});

import { z } from "zod";
import { stepZod, stepsZod, testZod } from "./validations";

export type TStep = z.infer<typeof stepZod>;
export type TStepSteps = z.infer<typeof stepsZod>;
export type TStepTest = z.infer<typeof testZod>;

export type TVal<T> = { success: true; data: T };

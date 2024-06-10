import { z } from "zod";
import { stepZod, stepsZod, testZod, userZod } from "./validations";

export type TVal<T> = { success: true; data: T };

// STEPS

export type TStep = z.infer<typeof stepZod>;
export type TStepSteps = z.infer<typeof stepsZod>;
export type TStepTest = z.infer<typeof testZod>;

// USERS

export type TUser = z.infer<typeof userZod>;

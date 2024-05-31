import { z } from "zod";
import { stepZod } from "./validations";
import { ZodError } from "zod";

export type TStep = z.infer<typeof stepZod>;

export type TVal<T> = { success: true; data: T };

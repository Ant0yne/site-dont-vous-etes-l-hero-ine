import { z } from "zod";
import { stepZod } from "./validations";

export type TStep = z.infer<typeof stepZod>;

export type TVal<T> = { success: true; data: T };

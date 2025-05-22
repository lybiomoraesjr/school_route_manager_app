import { PersonSchema } from "@/shared/schemas";
import { z } from "zod";

export const DriverSchema = PersonSchema.extend({
	cnh: z.string(),
});

export type Driver = z.infer<typeof DriverSchema>;

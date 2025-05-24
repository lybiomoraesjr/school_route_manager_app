import { PersonSchema } from "@/shared/schemas";
import { z } from "zod";

export const GuardianSchema = PersonSchema.extend({
	guardianId: z.string(),
});

export type Guardian = z.infer<typeof GuardianSchema>;

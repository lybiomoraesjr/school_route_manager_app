import { z } from "zod";
import { AddressSchema } from "@/shared/schemas";
import { SchoolSchema } from "@/features/school/schema/school.schema";

export const StopSchema = z.object({
	id: z.string(),
	name: z.string(),
	address: AddressSchema,
	latitude: z.string(),
	longitude: z.string(),
	school: SchoolSchema.nullable(),
});

export type Stop = z.infer<typeof StopSchema>;

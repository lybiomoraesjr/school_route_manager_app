import { VehicleTypeSchema } from "@/features/vehicles/schema/vehicle-type.schema";
import { StatusSchema } from "@/shared/schemas";
import { z } from "zod";

export const VehicleSchema = z.object({
	id: z.string(),
	name: z.string(),
	plate: z.string(),
	model: z.string(),
	year: z.string(),
	capacity: z.number(),
	type: VehicleTypeSchema,
	status: StatusSchema,
});

export type Vehicle = z.infer<typeof VehicleSchema>;

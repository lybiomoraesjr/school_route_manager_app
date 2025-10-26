import { PersonSchema } from "@/shared/schemas/person.schema";
import { z } from "zod";

export const MonitorSchema = PersonSchema;
export type Monitor = z.infer<typeof MonitorSchema>;

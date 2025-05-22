import { z } from "zod";
import { PersonSchema } from "@/shared/schemas/person.schema";

export const StudentSchema = PersonSchema.extend({
	id: z.string().min(1, "ID é obrigatório"),
	guardianId: z.string().min(1, "Responsável é obrigatório"),
});

export type Student = z.infer<typeof StudentSchema>;

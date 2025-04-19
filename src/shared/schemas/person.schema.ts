import { AddressSchema } from "@/shared/schemas/address.schema";
import { StatusSchema } from "@/shared/schemas/status.schema";
import { z } from "zod";

export const PersonSchema = z.object({
	name: z.string(),
	phone: z.string(),
	birthDate: z.string(),
	cpf: z.string(),
	address: AddressSchema,
	status: StatusSchema,
});

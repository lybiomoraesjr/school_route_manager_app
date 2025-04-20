import { AddressSchema } from "@/shared/schemas/address.schema";
import { StatusSchema } from "@/shared/schemas/status.schema";
import { z } from "zod";

export const PersonSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório"),
	phone: z.string().min(1, "Telefone é obrigatório"),
	birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
	cpf: z.string().regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido"),
	address: AddressSchema,
	status: StatusSchema,
});

export type Person = z.infer<typeof PersonSchema>;

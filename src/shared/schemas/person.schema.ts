import { AddressSchema } from "@/shared/schemas/fields/address.schema";
import { OptionalPhoneSchema } from "@/shared/schemas/fields/phone.schema";
import { StatusSchema } from "@/shared/schemas/fields/status.schema";
import { isValidCpf } from "@/shared/validators/cpf.validator";
import { isValidCellPhone } from "@/shared/validators/phone.validator";
import { z } from "zod";

export const PersonSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório"),
	phone: OptionalPhoneSchema,
	cellphone: z
		.string()
		.min(1, "Celular é obrigatório")
		.refine(isValidCellPhone, { message: "Celular inválido" }),
	birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
	cpf: z
		.string()
		.regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido")
		.refine(isValidCpf, { message: "CPF inválido" }),
	address: AddressSchema,
	status: StatusSchema,
});

export type Person = z.infer<typeof PersonSchema>;

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
	birthDate: z.date({
		required_error: "Data de nascimento é obrigatória",
		invalid_type_error: "Data inválida",
	}),
	cpf: z
		.string()
		.regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido")
		.refine(isValidCpf, { message: "CPF inválido" }),
	address: AddressSchema,
	status: StatusSchema,
	email: z.string().email("Email inválido"),
});

export type Person = z.infer<typeof PersonSchema>;

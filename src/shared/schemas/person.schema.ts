import { AddressSchema } from "@/shared/schemas/fields/address.schema";
import { OptionalPhoneSchema } from "@/shared/schemas/fields/phone.schema";
import { StatusSchema } from "@/shared/schemas/fields/status.schema";
import { isValidCpf } from "@/shared/validators/cpf.validator";
import { isValidCellPhone } from "@/shared/validators/phone.validator";
import dayjs from "dayjs";
import { z } from "zod";

export const PersonSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório"),
	phone: OptionalPhoneSchema,
	cellphone: z
		.string()
		.min(1, "Celular é obrigatório")
		.refine(isValidCellPhone, { message: "Celular inválido" }),
	birthDate: z.preprocess(
		(val) => {
			if (typeof val === "string") {
				const date = dayjs(val, "DD/MM/YYYY", true);
				return date.isValid() ? date.toDate() : val;
			}
			return val;
		},
		z.date({ required_error: "Data de nascimento é obrigatória" })
	),
	cpf: z
		.string()
		.regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido")
		.refine(isValidCpf, { message: "CPF inválido" }),
	address: AddressSchema,
	status: StatusSchema,
	email: z.string().email("Email inválido"),
});

export type Person = z.infer<typeof PersonSchema>;

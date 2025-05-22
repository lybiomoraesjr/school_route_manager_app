import { z } from "zod";
import {
	isValidPhone,
	isValidCellPhone,
} from "@/shared/validators/phone.validator";

export const RequiredPhoneSchema = z
	.string()
	.refine(isValidPhone, { message: "Telefone fixo inválido" });

export const OptionalPhoneSchema = z
	.string()
	.refine((val) => !val || isValidPhone(val), {
		message: "Telefone fixo inválido",
	})
	.optional();

export const RequiredCellPhoneSchema = z
	.string()
	.min(1, "Celular é obrigatório")
	.refine(isValidCellPhone, { message: "Celular inválido" });

export const OptionalCellPhoneSchema = z
	.string()
	.refine((val) => !val || isValidCellPhone(val), {
		message: "Celular inválido",
	})
	.optional();

export const OptionalEmailSchema = z
	.string()
	.email("Email inválido")
	.optional();

// ... existing code ...

export const ContactWithRequiredCellPhoneSchema = z.object({
	phone: OptionalPhoneSchema,
	cellphone: RequiredCellPhoneSchema,
	email: OptionalEmailSchema,
});

export const ContactWithRequiredPhoneSchema = z.object({
	phone: RequiredPhoneSchema,
	cellphone: OptionalCellPhoneSchema,
	email: OptionalEmailSchema,
});

export type ContactWithRequiredCellPhone = z.infer<
	typeof ContactWithRequiredCellPhoneSchema
>;
export type ContactWithRequiredPhone = z.infer<
	typeof ContactWithRequiredPhoneSchema
>;

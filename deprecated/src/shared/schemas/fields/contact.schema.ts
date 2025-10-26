import { z } from "zod";
import {
	isValidPhone,
	isValidCellPhone,
} from "@/shared/validators/phone.validator";

export const PhoneSchema = z
	.string()
	.refine(isValidPhone, { message: "Telefone fixo inválido" });
export const CellPhoneSchema = z
	.string()
	.refine(isValidCellPhone, { message: "Celular inválido" });
export const EmailSchema = z.string().email("Email inválido");

export type ContactFieldConfig = {
	phone?: "required" | "optional" | "none";
	cellphone?: "required" | "optional" | "none";
	email?: "required" | "optional" | "none";
};

export const createContactSchema = (config: ContactFieldConfig) => {
	const schema: Record<string, z.ZodTypeAny> = {};

	if (config.phone === "required") {
		schema.phone = PhoneSchema;
	} else if (config.phone === "optional") {
		schema.phone = PhoneSchema.optional();
	}

	if (config.cellphone === "required") {
		schema.cellphone = CellPhoneSchema;
	} else if (config.cellphone === "optional") {
		schema.cellphone = CellPhoneSchema.optional();
	}

	if (config.email === "required") {
		schema.email = EmailSchema;
	} else if (config.email === "optional") {
		schema.email = EmailSchema.optional();
	}

	return z.object(schema);
};

export const ContactConfigs = {
	withRequiredCellPhone: {
		phone: "optional",
		cellphone: "required",
		email: "optional",
	} as const,
	withRequiredPhone: {
		phone: "required",
		cellphone: "optional",
		email: "optional",
	} as const,
	withRequiredEmail: {
		phone: "optional",
		cellphone: "optional",
		email: "required",
	} as const,
	withAllRequired: {
		phone: "required",
		cellphone: "required",
		email: "required",
	} as const,
	withAllOptional: {
		phone: "optional",
		cellphone: "optional",
		email: "optional",
	} as const,
	withRequiredPhoneAndEmail: {
		phone: "required",
		cellphone: "optional",
		email: "required",
	} as const,
} as const;

export const ContactWithRequiredCellPhoneSchema = createContactSchema(
	ContactConfigs.withRequiredCellPhone
);
export const ContactWithRequiredPhoneSchema = createContactSchema(
	ContactConfigs.withRequiredPhone
);
export const ContactWithRequiredEmailSchema = createContactSchema(
	ContactConfigs.withRequiredEmail
);
export const ContactWithAllRequiredSchema = createContactSchema(
	ContactConfigs.withAllRequired
);
export const ContactWithAllOptionalSchema = createContactSchema(
	ContactConfigs.withAllOptional
);

export const ContactWithRequiredPhoneAndEmailSchema = createContactSchema(
	ContactConfigs.withRequiredPhoneAndEmail
);

export type ContactWithRequiredCellPhone = z.infer<
	typeof ContactWithRequiredCellPhoneSchema
>;
export type ContactWithRequiredPhone = z.infer<
	typeof ContactWithRequiredPhoneSchema
>;
export type ContactWithRequiredEmail = z.infer<
	typeof ContactWithRequiredEmailSchema
>;
export type ContactWithAllRequired = z.infer<
	typeof ContactWithAllRequiredSchema
>;
export type ContactWithAllOptional = z.infer<
	typeof ContactWithAllOptionalSchema
>;
export type ContactWithRequiredPhoneAndEmail = z.infer<
	typeof ContactWithRequiredPhoneAndEmailSchema
>;

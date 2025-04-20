import { isValidPhone } from "@/shared/validators/phone.validator";
import { z } from "zod";

export const RequiredPhoneSchema = z
	.string()
	.refine(isValidPhone, { message: "Telefone fixo inválido" });

export const OptionalPhoneSchema = z
	.string()
	.refine((val) => !val || isValidPhone(val), {
		message: "Telefone fixo inválido",
	})
	.optional();

import { z } from "zod";

export const AddressSchema = z.object({
	street: z.string().min(1, "Rua é obrigatória"),
	number: z.string().min(1, "Número é obrigatório"),
	neighborhood: z.string().min(1, "Bairro é obrigatório"),
	city: z.string().min(1, "Cidade é obrigatória"),
	zipCode: z.string().regex(/^\d{5}-?\d{3}$/, "Formato de CEP inválido"),
	complement: z.string().optional(),
});

export type Address = z.infer<typeof AddressSchema>;

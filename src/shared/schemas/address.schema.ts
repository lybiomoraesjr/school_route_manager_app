import { z } from "zod";

export const AddressSchema = z.object({
	street: z.string().min(1, "Street is required"),
	number: z.string().min(1, "Number is required"),
	neighborhood: z.string().min(1, "Neighborhood is required"),
	city: z.string().min(1, "City is required"),
	zipCode: z.string().regex(/^\d{5}-?\d{3}$/, "Invalid zip code format"),
	complement: z.string().optional(),
});

export type Address = z.infer<typeof AddressSchema>;

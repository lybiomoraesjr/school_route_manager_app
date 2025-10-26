import { z } from "zod";
import {
	AddressSchema,
	ContactWithRequiredPhoneAndEmailSchema,
} from "@/shared/schemas";

export const SchoolSchema = z.object({
	id: z.string(),
	name: z.string(),
	address: AddressSchema,
	contact: ContactWithRequiredPhoneAndEmailSchema,
});

export type School = z.infer<typeof SchoolSchema>;

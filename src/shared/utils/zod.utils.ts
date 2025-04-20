import { ZodObject, ZodRawShape } from "zod";

export const isFieldRequired = <T extends ZodRawShape>(
	schema: ZodObject<T>,
	field: keyof T
): boolean => {
	const shape = schema.shape;

	const fieldSchema = shape[field];

	const result = fieldSchema.safeParse(undefined);
	return !result.success;
};

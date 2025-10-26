import { useForm, zodResolver, UseFormReturnType } from "@mantine/form";
import { z } from "zod";

export function useContactForm<T extends z.ZodTypeAny>(
	schema: T,
	initialValues?: Partial<z.infer<T>>
): UseFormReturnType<z.infer<T>> {
	const defaultValues = {
		phone: "",
		cellphone: "",
		email: "",
		...initialValues,
	} as z.infer<T>;

	return useForm({
		initialValues: defaultValues,
		validate: zodResolver(schema),
	});
}

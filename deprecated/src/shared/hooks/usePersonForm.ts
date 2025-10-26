import { PersonSchema, Person } from "@/shared/schemas";
import { Status } from "@/shared/types";
import { useForm, zodResolver } from "@mantine/form";

export const usePersonForm = (initialValues?: Partial<Person>) => {
	return useForm<Partial<Person>>({
		initialValues: {
			name: "",
			cpf: "",
			birthDate: new Date(),
			status: Status.ACTIVE,
			...initialValues,
		},
		validate: zodResolver(PersonSchema),
	});
};

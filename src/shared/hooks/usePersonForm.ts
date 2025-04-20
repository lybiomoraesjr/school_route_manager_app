import { PersonSchema, Person } from "@/shared/schemas";
import { Status } from "@/shared/types";
import { useForm, zodResolver } from "@mantine/form";

export const usePersonForm = (initialValues?: Partial<Person>) => {
	return useForm<Person>({
		initialValues: {
			name: "",
			cpf: "",
			birthDate: "",
			phone: "",
			status: Status.ACTIVE,
			address: {
				street: "",
				number: "",
				neighborhood: "",
				city: "",
				zipCode: "",
				complement: "",
			},
			...initialValues,
		},
		validate: zodResolver(PersonSchema),
	});
};

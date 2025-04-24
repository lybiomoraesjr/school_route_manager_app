import { Contact, ContactSchema } from "@/shared/schemas/fields/contact.schema";

import { useForm, zodResolver } from "@mantine/form";

export const useContactForm = (initialValues?: Contact) => {
	return useForm<Contact>({
		initialValues: {
			phone: "",
			cellphone: "",
			email: "",
			...initialValues,
		},
		validate: zodResolver(ContactSchema),
	});
};

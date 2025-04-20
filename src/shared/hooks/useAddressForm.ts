import { Address, AddressSchema } from "@/shared/schemas/address.schema";
import { useForm, zodResolver } from "@mantine/form";

export const useAddressForm = (initialValues?: Partial<Address>) => {
	return useForm<Address>({
		initialValues: {
			street: "",
			number: "",
			neighborhood: "",
			city: "",
			zipCode: "",
			complement: "",
			...initialValues,
		},
		validate: zodResolver(AddressSchema),
	});
};

import { UseFormReturnType } from "@mantine/form";
import { TextInput } from "@mantine/core";
import { PhoneInput } from "@/shared/components/form/inputs/PhoneInput";
import { CellPhoneInput } from "@/shared/components/form/inputs/CellPhoneInput";
import { isFieldRequired } from "@/shared/utils/zod.utils";
import { Contact, ContactSchema } from "@/shared/schemas/fields/contact.schema";

export type ContactFieldsProps = {
	form: UseFormReturnType<Contact>;
	readOnly?: boolean;
};

export const ContactFields = ({
	form,
	readOnly = false,
}: ContactFieldsProps) => {
	return (
		<>
			<PhoneInput
				{...form.getInputProps("phone")}
				readOnly={readOnly}
				withAsterisk={
					!readOnly && isFieldRequired(ContactSchema, "phone")
				}
			/>
			<CellPhoneInput
				{...form.getInputProps("cellphone")}
				readOnly={readOnly}
				withAsterisk={
					!readOnly && isFieldRequired(ContactSchema, "cellphone")
				}
			/>
			<TextInput
				label="E-mail"
				{...form.getInputProps("email")}
				readOnly={readOnly}
				withAsterisk={
					!readOnly && isFieldRequired(ContactSchema, "email")
				}
				placeholder="Ex: jose@email.com"
			/>
		</>
	);
};

import { UseFormReturnType } from "@mantine/form";
import { TextInput } from "@mantine/core";
import { PhoneInput } from "@/shared/components/form/inputs/PhoneInput";
import { CellPhoneInput } from "@/shared/components/form/inputs/CellPhoneInput";
import { ContactFieldConfig } from "@/shared/schemas/fields/contact.schema";

export type ContactFieldsProps<T> = {
	form: UseFormReturnType<T>;
	config: ContactFieldConfig;
	readOnly?: boolean;
};

export function ContactFields<T>({
	form,
	config,
	readOnly = false,
}: ContactFieldsProps<T>) {
	return (
		<>
			{config.phone !== "none" && (
				<PhoneInput
					{...form.getInputProps("phone")}
					readOnly={readOnly}
					withAsterisk={!readOnly && config.phone === "required"}
				/>
			)}
			{config.cellphone !== "none" && (
				<CellPhoneInput
					{...form.getInputProps("cellphone")}
					readOnly={readOnly}
					withAsterisk={!readOnly && config.cellphone === "required"}
				/>
			)}
			{config.email !== "none" && (
				<TextInput
					label="E-mail"
					{...form.getInputProps("email")}
					readOnly={readOnly}
					withAsterisk={!readOnly && config.email === "required"}
					placeholder="Ex: jose@email.com"
				/>
			)}
		</>
	);
}

import { PostalCodeInput } from "@/shared/components/form/inputs/PostalCodeInput";
import { AddressSchema } from "@/shared/schemas";
import { isFieldRequired } from "@/shared/utils/zod.utils";
import { TextInput } from "@mantine/core";

export const AddressFields = ({
	form,
	readOnly = false,
}: {
	form: any;
	readOnly?: boolean;
}) => {
	return (
		<>
			<PostalCodeInput
				label="CEP"
				country="BR"
				{...form.getInputProps("zipCode")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "zipCode")
				}
				disabled={readOnly}
			/>
			<TextInput
				label="Rua"
				placeholder="Ex: Avenida Brasil"
				{...form.getInputProps("street")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "street")
				}
				disabled={readOnly}
			/>

			<TextInput
				label="Número"
				placeholder="Ex: 123"
				{...form.getInputProps("number")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "number")
				}
				disabled={readOnly}
			/>

			<TextInput
				label="Bairro"
				placeholder="Ex: Centro"
				{...form.getInputProps("neighborhood")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "neighborhood")
				}
				disabled={readOnly}
			/>

			<TextInput
				label="Cidade"
				placeholder="Ex: São Paulo"
				{...form.getInputProps("city")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "city")
				}
				disabled={readOnly}
			/>

			<TextInput
				label="Complemento"
				placeholder="Ex: Apto 101, Bloco B"
				{...form.getInputProps("complement")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "complement")
				}
				disabled={readOnly}
			/>

			<TextInput
				label="Estado"
				placeholder="Ex: SP"
				{...form.getInputProps("state")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "state")
				}
				disabled={readOnly}
			/>
		</>
	);
};

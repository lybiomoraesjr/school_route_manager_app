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
			<TextInput
				label="Rua"
				{...form.getInputProps("street")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>
			<TextInput
				label="Número"
				{...form.getInputProps("number")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>
			<TextInput
				label="Bairro"
				{...form.getInputProps("neighborhood")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>
			<TextInput
				label="Cidade"
				{...form.getInputProps("city")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>
			<TextInput
				label="CEP"
				{...form.getInputProps("zipCode")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>
			<TextInput
				label="Complemento"
				{...form.getInputProps("complement")}
				disabled={readOnly}
			/>
		</>
	);
};

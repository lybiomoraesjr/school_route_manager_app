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
				disabled={readOnly}
			/>
			<TextInput
				label="Número"
				{...form.getInputProps("number")}
				disabled={readOnly}
			/>
			<TextInput
				label="Bairro"
				{...form.getInputProps("neighborhood")}
				disabled={readOnly}
			/>
			<TextInput
				label="Cidade"
				{...form.getInputProps("city")}
				disabled={readOnly}
			/>
			<TextInput
				label="CEP"
				{...form.getInputProps("zipCode")}
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

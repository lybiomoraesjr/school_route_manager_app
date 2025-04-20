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
				placeholder="Ex: Avenida Brasil"
				{...form.getInputProps("street")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>

			<TextInput
				label="Número"
				placeholder="Ex: 123"
				{...form.getInputProps("number")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>

			<TextInput
				label="Bairro"
				placeholder="Ex: Centro"
				{...form.getInputProps("neighborhood")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>

			<TextInput
				label="Cidade"
				placeholder="Ex: São Paulo"
				{...form.getInputProps("city")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>

			<TextInput
				label="CEP"
				placeholder="00000-000"
				{...form.getInputProps("zipCode")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>

			<TextInput
				label="Complemento"
				placeholder="Ex: Apto 101, Bloco B"
				{...form.getInputProps("complement")}
				disabled={readOnly}
			/>
		</>
	);
};

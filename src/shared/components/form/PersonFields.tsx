import { TextInput, Select } from "@mantine/core";

export const PersonFields = ({
	form,
	readOnly = false,
}: {
	form: any;
	readOnly?: boolean;
}) => {
	return (
		<>
			<TextInput
				label="Nome"
				{...form.getInputProps("name")}
				disabled={readOnly}
			/>
			<TextInput
				label="CPF"
				{...form.getInputProps("cpf")}
				disabled={readOnly}
			/>
			<TextInput
				label="Data de nascimento"
				{...form.getInputProps("birthDate")}
				disabled={readOnly}
			/>
			<TextInput
				label="Telefone"
				{...form.getInputProps("phone")}
				disabled={readOnly}
			/>
			<Select
				label="Status"
				data={[
					{ value: "active", label: "Ativo" },
					{ value: "inactive", label: "Inativo" },
				]}
				{...form.getInputProps("status")}
				disabled={readOnly}
			/>
		</>
	);
};

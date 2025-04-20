import { CpfInput } from "@/shared/components/form/CpfInput";
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
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>

			<CpfInput {...form.getInputProps("cpf")} readOnly={readOnly} />

			<TextInput
				label="Data de nascimento"
				{...form.getInputProps("birthDate")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>
			<TextInput
				label="Telefone"
				{...form.getInputProps("phone")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>
			<Select
				label="Status"
				data={[
					{ value: "active", label: "Ativo" },
					{ value: "inactive", label: "Inativo" },
				]}
				{...form.getInputProps("status")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>
		</>
	);
};

import { CellPhoneInput } from "@/shared/components/form/CellPhoneInput";
import { CpfInput } from "@/shared/components/form/CpfInput";
import { PhoneInput } from "@/shared/components/form/PhoneInput";
import { Status } from "@/shared/types";
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
			<PhoneInput {...form.getInputProps("phone")} readOnly={readOnly} />

			<CellPhoneInput
				{...form.getInputProps("cellPhone")}
				readOnly={readOnly}
			/>
			<Select
				label="Status"
				data={[
					{ value: `${Status.ACTIVE}`, label: "Ativo" },
					{ value: `${Status.INACTIVE}`, label: "Inativo" },
				]}
				{...form.getInputProps("status")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>
		</>
	);
};

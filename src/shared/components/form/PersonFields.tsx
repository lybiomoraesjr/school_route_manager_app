import { CellPhoneInput } from "@/shared/components/form/CellPhoneInput";
import { CpfInput } from "@/shared/components/form/CpfInput";
import { PhoneInput } from "@/shared/components/form/PhoneInput";
import { PersonSchema } from "@/shared/schemas";
import { Status } from "@/shared/types";
import { isFieldRequired } from "@/shared/utils/zod.utils";
import { TextInput, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IMaskInput } from "react-imask";

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
				withAsterisk={
					!readOnly && isFieldRequired(PersonSchema, "name")
				}
				placeholder="Ex: José da Silva"
				disabled={readOnly}
			/>

			<CpfInput
				{...form.getInputProps("cpf")}
				readOnly={readOnly}
				withAsterisk={!readOnly && isFieldRequired(PersonSchema, "cpf")}
			/>

			<DateInput
				label="Data de nascimento"
				placeholder="DD/MM/AAAA"
				{...form.getInputProps("birthDate")}
				withAsterisk={
					!readOnly && isFieldRequired(PersonSchema, "birthDate")
				}
				disabled={readOnly}
				valueFormat="DD/MM/YYYY"
				locale="pt-br"
				component={IMaskInput}
				mask="00/00/0000"
			/>

			<PhoneInput
				{...form.getInputProps("phone")}
				readOnly={readOnly}
				withAsterisk={
					!readOnly && isFieldRequired(PersonSchema, "phone")
				}
			/>
			<CellPhoneInput
				{...form.getInputProps("cellPhone")}
				readOnly={readOnly}
				withAsterisk={
					!readOnly && isFieldRequired(PersonSchema, "cellphone")
				}
			/>
			<Select
				label="Status"
				data={[
					{ value: `${Status.ACTIVE}`, label: "Ativo" },
					{ value: `${Status.INACTIVE}`, label: "Inativo" },
				]}
				{...form.getInputProps("status")}
				withAsterisk={
					!readOnly && isFieldRequired(PersonSchema, "status")
				}
				disabled={readOnly}
			/>
		</>
	);
};

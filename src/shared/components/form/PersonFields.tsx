import { CellPhoneInput } from "@/shared/components/form/CellPhoneInput";
import { CpfInput } from "@/shared/components/form/CpfInput";
import { PhoneInput } from "@/shared/components/form/PhoneInput";
import { PersonSchema } from "@/shared/schemas";
import { Status } from "@/shared/types";
import { isFieldRequired } from "@/shared/utils/zod.utils";
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
				withAsterisk={
					!readOnly && isFieldRequired(PersonSchema, "name")
				}
				disabled={readOnly}
			/>

			<CpfInput
				{...form.getInputProps("cpf")}
				readOnly={readOnly}
				withAsterisk={!readOnly && isFieldRequired(PersonSchema, "cpf")}
			/>

			<TextInput
				label="Data de nascimento"
				{...form.getInputProps("birthDate")}
				withAsterisk={
					!readOnly && isFieldRequired(PersonSchema, "birthDate")
				}
				disabled={readOnly}
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

import { SimpleGrid, TextInput, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { CpfInput } from "@/shared/components/form/inputs/CpfInput";
import { IMaskInput } from "react-imask";
import { PersonSchema } from "@/shared/schemas";
import { Status } from "@/shared/types";
import { isFieldRequired } from "@/shared/utils/zod.utils";
import { useResponsive } from "@/shared/hooks/useResponsive";
export const PersonFields = ({
	form,
	readOnly = false,
}: {
	form: any;
	readOnly?: boolean;
}) => {
	const { isMobile } = useResponsive();
	return (
		<SimpleGrid cols={isMobile ? 1 : 2} spacing="md">
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
		</SimpleGrid>
	);
};

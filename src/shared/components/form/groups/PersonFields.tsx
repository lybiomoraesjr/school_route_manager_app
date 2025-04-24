import { SimpleGrid, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { CpfInput } from "@/shared/components/form/inputs/CpfInput";
import { IMaskInput } from "react-imask";
import { isFieldRequired } from "@/shared/utils/zod.utils";
import { useResponsive } from "@/shared/hooks/useResponsive";
import { UseFormReturnType } from "@mantine/form";
import { Person, PersonSchema } from "@/shared/schemas";
export const PersonFields = ({
	form,
	readOnly = false,
}: {
	form: UseFormReturnType<Partial<Person>>;
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
				maxDate={new Date()}
			/>
		</SimpleGrid>
	);
};

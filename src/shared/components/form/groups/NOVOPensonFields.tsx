//pessoa tera os campos:
// nome*
// cpf*
// data de nascimento*
// telefone
// celular*
// email
// status*
//ECLUIR CONTATO FIELDS



import { Select, SimpleGrid, TextInput } from "@mantine/core";
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
        <SimpleGrid cols={isMobile ? 1 : 3} spacing="md">
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

            <TextInput
                label="Telefone"
                placeholder="(99) 9999-9999"
                {...form.getInputProps("phone")}
                disabled={readOnly}
                component={IMaskInput}
                mask="(00) 0000-0000"
                withAsterisk={
                    !readOnly && isFieldRequired(PersonSchema, "phone")
                }
            />

            <TextInput
                label="Celular"
                placeholder="(99) 99999-9999"
                {...form.getInputProps("cellphone")}
                disabled={readOnly}
                component={IMaskInput}
                mask="(00) 00000-0000"
                withAsterisk={
                    !readOnly && isFieldRequired(PersonSchema, "cellphone")
                }
            />

            <TextInput
                label="E-mail"
                placeholder="exemplo@email.com"
                {...form.getInputProps("email")}
                disabled={readOnly}
                withAsterisk={
                    !readOnly && isFieldRequired(PersonSchema, "email")
                }
            />

            <Select
                label="Status"
                placeholder="Selecione o status"
                data={[
                    { value: "active", label: "Ativo" },
                    { value: "inactive", label: "Inativo" },
                ]}
                {...form.getInputProps("status")}
                disabled={readOnly}
                withAsterisk={
                    !readOnly && isFieldRequired(PersonSchema, "status")
                }
            />
        </SimpleGrid>
    );
};
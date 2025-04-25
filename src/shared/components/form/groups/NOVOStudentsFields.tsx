// estudante tera pessoafields+ adress + campos de um responsavel + rotas que pode ser mais de uma

import { Select, SimpleGrid, TextInput, Button, Group } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { CpfInput } from "@/shared/components/form/inputs/CpfInput";
import { IMaskInput } from "react-imask";
import { isFieldRequired } from "@/shared/utils/zod.utils";
import { useResponsive } from "@/shared/hooks/useResponsive";
import { UseFormReturnType } from "@mantine/form";
import { Person, PersonSchema } from "@/shared/schemas";

interface Responsible {
    name: string;
    phone: string;
}

interface Route {
    name: string;
    description?: string;
}

interface StudentFieldsForm {
    responsible: Responsible;
    routes: Route[];
}

export const NOVOStudentsFields = ({
    form,
    readOnly = false,
}: {
    form: UseFormReturnType<Partial<StudentFieldsForm>>;
    readOnly?: boolean;
}) => {
    const { isMobile } = useResponsive();

    const routes = form.values.routes || [];

    const handleRouteChange = (idx: number, field: keyof Route, value: string) => {
        const updatedRoutes = routes.map((route, i) =>
            i === idx ? { ...route, [field]: value } : route
        );
        form.setFieldValue("routes", updatedRoutes);
    };

    const addRoute = () => {
        form.setFieldValue("routes", [...routes, { name: "", description: "" }]);
    };

    return (
        <SimpleGrid cols={isMobile ? 1 : 3} spacing="md">
            {/* Responsible Fields */}
            <TextInput
                label="Nome do responsável"
                {...form.getInputProps("responsible.name")}
                withAsterisk={!readOnly}
                placeholder="Ex: Maria da Silva"
                disabled={readOnly}
            />
            <TextInput
                label="Telefone do responsável"
                placeholder="(99) 99999-9999"
                {...form.getInputProps("responsible.phone")}
                disabled={readOnly}
                component={IMaskInput}
                mask="(00) 00000-0000"
                withAsterisk={!readOnly}
            />

            {/* Routes Fields */}
            <Group direction="column" grow mt="md" style={{ gridColumn: "1 / -1" }}>
                {routes.map((route, idx) => (
                    <Group key={idx} grow>
                        <TextInput
                            label={`Nome da rota #${idx + 1}`}
                            value={route.name}
                            onChange={e => handleRouteChange(idx, "name", e.target.value)}
                            disabled={readOnly}
                            required={!readOnly}
                        />
                        <TextInput
                            label="Descrição (opcional)"
                            value={route.description}
                            onChange={e => handleRouteChange(idx, "description", e.target.value)}
                            disabled={readOnly}
                        />
                    </Group>
                ))}
                {!readOnly && (
                    <Button variant="light" onClick={addRoute}>
                        + Adicionar rota
                    </Button>
                )}
            </Group>
        </SimpleGrid>
    );
};
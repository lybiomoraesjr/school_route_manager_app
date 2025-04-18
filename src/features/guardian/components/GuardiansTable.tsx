import { EntityTable } from "@/shared/components/EntityTable/EntityTable";
import { guardiansMock } from "@/mock/guardians.mock";

export const GuardiansTable = () => {
	return (
		<EntityTable
			records={guardiansMock}
			defaultSortColumn="name"
			columns={[
				{ accessor: "name", title: "Nome", sortable: true },
				{ accessor: "phone", title: "Telefone", sortable: true },
				{ accessor: "cpf", title: "CPF", sortable: true },
				{ accessor: "address", title: "Endereço", sortable: true },
				{ accessor: "cnh", title: "CNH", sortable: true },
				{
					accessor: "birthDate",
					title: "Data de nascimento",
					sortable: true,
				},
			]}
		/>
	);
};

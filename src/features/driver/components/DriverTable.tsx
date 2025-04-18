import { driversMock } from "@/mock/drivers.mock";
import { EntityTable } from "@/shared/components/EntityTable/EntityTable";

export const DriverTable = () => {
	return (
		<EntityTable
			records={driversMock}
			defaultSortColumn="name"
			columns={[
				{ accessor: "name", title: "Nome", sortable: true },
				{ accessor: "phone", title: "Telefone", sortable: true },
				{ accessor: "cpf", title: "CPF", sortable: true },
			]}
		/>
	);
};

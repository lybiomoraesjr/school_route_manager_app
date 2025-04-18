import { EntityTable } from "@/shared/components/EntityTable/EntityTable";
import { studentsMock } from "@/mock/students.mock";

export const SchoolsTable = () => {
	return (
		<EntityTable
			records={studentsMock}
			defaultSortColumn="name"
			columns={[
				{ accessor: "name", title: "Nome", sortable: true },
				{ accessor: "address", title: "Endereço", sortable: true },
				{ accessor: "phone", title: "Telefone", sortable: true },
				{ accessor: "email", title: "Email", sortable: true },
				{ accessor: "status", title: "Status", sortable: true },
			]}
		/>
	);
};

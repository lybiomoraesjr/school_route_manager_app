import { EntityTable } from "@/shared/components/EntityTable/EntityTable";
import { studentsMock } from "@/mock/students.mock";

export const MonitorsTable = () => {
	return (
		<EntityTable
			records={studentsMock}
			defaultSortColumn="name"
			columns={[
				{ accessor: "name", title: "Nome", sortable: true },
				{ accessor: "phone", title: "Telefone", sortable: true },
				{ accessor: "email", title: "Email", sortable: true },
				{ accessor: "status", title: "Status", sortable: true },
			]}
		/>
	);
};

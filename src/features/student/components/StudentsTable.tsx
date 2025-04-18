import { EntityTable } from "@/shared/components/EntityTable/EntityTable";
import { studentsMock } from "@/mock/students.mock";

export const StudentsTable = () => {
	return (
		<EntityTable
			records={studentsMock}
			defaultSortColumn="name"
			columns={[
				{ accessor: "name", title: "Nome", sortable: true },
				{ accessor: "phone", title: "Telefone", sortable: true },
				{
					accessor: "guardianName",
					title: "Responsável",
					sortable: true,
				},
				{
					accessor: "guardianPhone",
					title: "Tel. Responsável",
					sortable: true,
				},
			]}
		/>
	);
};

import { EntityTable } from "@/shared/components/EntityTable/EntityTable";
import { Student } from "@/features/student/model/student.model";

type StudentsTableProps = {
	students: Student[];
};

export const StudentsTable: React.FC<StudentsTableProps> = ({ students }) => {
	return (
		<EntityTable
			records={students}
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

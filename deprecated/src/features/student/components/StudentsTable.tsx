import { Student } from "@/features/student/model/student.schema";
import { EntityTable } from "@/shared/components/EntityTable/EntityTable";

type StudentsTableProps = {
	students: Student[];
};

export const StudentsTable: React.FC<StudentsTableProps> = ({ students }) => {
	return (
		<EntityTable
			records={students}
			defaultSortColumn="name"
			columns={[
				{
					accessor: "name",
					title: "Nome",
				},
				{
					accessor: "phone",
					title: "Telefone",
				},
			]}
		/>
	);
};

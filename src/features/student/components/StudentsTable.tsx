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

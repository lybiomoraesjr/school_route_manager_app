import { EntityTable } from "@/shared/components/EntityTable/EntityTable";
import { School } from "@/features/school/model/school.model";

type SchoolsTableProps = {
	schools: School[];
};

export const SchoolsTable: React.FC<SchoolsTableProps> = ({ schools }) => {
	return (
		<EntityTable
			records={schools}
			defaultSortColumn="name"
			columns={[
				{
					accessor: "name",
					title: "Nome",
					sortable: true,
				},
				{
					accessor: "phone",
					title: "Telefone",
					sortable: true,
				},
				{
					accessor: "email",
					title: "Email",
					sortable: true,
				},
			]}
		/>
	);
};

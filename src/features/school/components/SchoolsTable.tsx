import { EntityTable } from "@/shared/components/EntityTable/EntityTable";
import { schoolsMock } from "@/mock/schools.mock";

export const SchoolsTable = () => {
	return (
		<EntityTable
			records={schoolsMock}
			defaultSortColumn="name"
			columns={[
				{
					accessor: "name",
					title: "Nome",
					sortable: true,
				},
				{
					accessor: "address",
					title: "Endereço",
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

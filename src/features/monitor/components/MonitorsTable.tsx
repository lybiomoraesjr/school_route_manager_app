import { EntityTable } from "@/shared/components/EntityTable/EntityTable";
import { monitorsMock } from "@/mock/monitors.mock";

export const MonitorsTable = () => {
	return (
		<EntityTable
			records={monitorsMock}
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

import { Monitor } from "@/features/monitor/model/monitor.schema";
import { EntityTable } from "@/shared/components/EntityTable/EntityTable";

type MonitorsTableProps = {
	monitors: Monitor[];
};

export const MonitorsTable: React.FC<MonitorsTableProps> = ({ monitors }) => {
	return (
		<EntityTable
			records={monitors}
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
			]}
		/>
	);
};

import { Route } from "@/features/route/model/route.model";
import { EntityTable } from "@/shared/components/EntityTable/EntityTable";

type RoutesTableProps = {
	routes: Route[];
};

export const RoutesTable: React.FC<RoutesTableProps> = ({ routes }) => {
	return (
		<EntityTable
			records={routes}
			defaultSortColumn="name"
			columns={[
				{
					accessor: "name",
					title: "Nome",
					sortable: true,
				},
			]}
		/>
	);
};

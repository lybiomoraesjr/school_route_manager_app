import { routesMock } from "@/mock/routes.mock";
import { EntityTable } from "@/shared/components/EntityTable/EntityTable";

export const RoutesTable = () => {
	return (
		<EntityTable
			records={routesMock}
			defaultSortColumn="name"
			columns={[
				{ accessor: "name", title: "Nome", sortable: true },
				{ accessor: "start", title: "Início", sortable: true },
				{ accessor: "end", title: "Fim", sortable: true },
				{ accessor: "status", title: "Status", sortable: true },
			]}
		/>
	);
};

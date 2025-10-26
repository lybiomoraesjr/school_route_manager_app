import { EntityTable } from "@/shared/components/EntityTable/EntityTable";
import { stopsMock } from "@/mock/stops.mock";

export const StopsTable = () => {
	return (
		<EntityTable
			records={stopsMock}
			defaultSortColumn="name"
			columns={[{ accessor: "name", title: "Nome", sortable: true }]}
		/>
	);
};

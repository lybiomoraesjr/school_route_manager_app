import { EntityTable } from "@/shared/components/EntityTable/EntityTable";
import { vehiclesMock } from "@/mock/vehicles.mock";

export const VehiclesTable = () => {
	return (
		<EntityTable
			records={vehiclesMock}
			defaultSortColumn="name"
			columns={[
				{ accessor: "name", title: "Nome", sortable: true },
				{ accessor: "plate", title: "Placa", sortable: true },
				{ accessor: "status", title: "Status", sortable: true },
			]}
		/>
	);
};

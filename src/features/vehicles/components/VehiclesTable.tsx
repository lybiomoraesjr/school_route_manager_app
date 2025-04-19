import { Vehicle } from "@/features/vehicles/model/vehicle.model";
import { EntityTable } from "@/shared/components/EntityTable/EntityTable";

type VehiclesTableProps = {
	vehicles: Vehicle[];
};

export const VehiclesTable: React.FC<VehiclesTableProps> = ({ vehicles }) => {
	return (
		<EntityTable
			records={vehicles}
			defaultSortColumn="name"
			columns={[
				{ accessor: "name", title: "Nome", sortable: true },
				{ accessor: "plate", title: "Placa", sortable: true },
				{ accessor: "status", title: "Status", sortable: true },
			]}
		/>
	);
};

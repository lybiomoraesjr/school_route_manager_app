import { EntityTable } from "@/shared/components/EntityTable/EntityTable";
import { Driver } from "@/features/driver/model/driver.model";

type DriverTableProps = {
	drivers: Driver[];
};

export const DriverTable: React.FC<DriverTableProps> = ({ drivers }) => {
	return (
		<EntityTable
			records={drivers}
			defaultSortColumn="name"
			columns={[
				{ accessor: "name", title: "Nome", sortable: true },
				{ accessor: "phone", title: "Telefone", sortable: true },
				{ accessor: "cpf", title: "CPF", sortable: true },
			]}
		/>
	);
};

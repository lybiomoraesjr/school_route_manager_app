import { EntityTable } from "@/shared/components/EntityTable/EntityTable";
import { Guardian } from "@/features/guardian/model/guardian.schema";

type GuardiansTableProps = {
	guardians: Guardian[];
};

export const GuardiansTable: React.FC<GuardiansTableProps> = ({
	guardians,
}) => {
	return (
		<EntityTable
			records={guardians}
			defaultSortColumn="name"
			columns={[
				{
					accessor: "name",
					title: "Nome",
				},
				{
					accessor: "phone",
					title: "Telefone",
				},
				{
					accessor: "cpf",
					title: "CPF",
				},
			]}
		/>
	);
};

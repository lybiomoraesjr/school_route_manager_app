import { useState } from "react";
import {
	DataTable,
	type DataTableSortStatus,
	type DataTableColumn,
} from "mantine-datatable";

type EntityTableProps<T> = {
	records: T[];
	columns: DataTableColumn<T>[];
	defaultSortColumn: keyof T;
};

export function EntityTable<T extends Record<string, any>>({
	records,
	columns,
	defaultSortColumn,
}: EntityTableProps<T>) {
	const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
		columnAccessor: defaultSortColumn as string,
		direction: "asc",
	});

	const sortedRecords = [...records].sort((a, b) => {
		const { columnAccessor, direction } = sortStatus;
		const aValue = a[columnAccessor as keyof T] as string;
		const bValue = b[columnAccessor as keyof T] as string;

		return direction === "asc"
			? aValue.localeCompare(bValue)
			: bValue.localeCompare(aValue);
	});

	return (
		<DataTable
			striped
			highlightOnHover
			sortStatus={sortStatus}
			onSortStatusChange={setSortStatus}
			columns={columns as DataTableColumn<Record<string, unknown>>[]}
			records={sortedRecords}
		/>
	);
}

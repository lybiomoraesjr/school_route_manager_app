import { SchoolsTable } from "@/features/school/components/SchoolsTable";
import { schoolsMock } from "@/mock/schools.mock";
import { Container } from "@mantine/core";

const SchoolPage = () => {
	return (
		<Container fluid>
			<SchoolsTable schools={schoolsMock} />
		</Container>
	);
};

export default SchoolPage;

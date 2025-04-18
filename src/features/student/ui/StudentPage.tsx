import { StudentsTable } from "@/features/student/components/StudentsTable";
import { Container } from "@mantine/core";

const StudentPage = () => {
	return (
		<Container fluid>
			<StudentsTable />
		</Container>
	);
};

export default StudentPage;

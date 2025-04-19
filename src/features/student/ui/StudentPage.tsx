import { StudentsTable } from "@/features/student/components/StudentsTable";
import { studentsMock } from "@/mock/students.mock";
import { Container } from "@mantine/core";

const StudentPage = () => {
	return (
		<Container fluid>
			<StudentsTable students={studentsMock} />
		</Container>
	);
};

export default StudentPage;

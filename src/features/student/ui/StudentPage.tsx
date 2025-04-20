import { StudentForm } from "@/features/student/components/StudentForm";
import { StudentsTable } from "@/features/student/components/StudentsTable";
import { studentsMock } from "@/mock/students.mock";
import { Container } from "@mantine/core";

const StudentPage = () => {
	return (
		<Container fluid>
			{/* <StudentsTable students={studentsMock} /> */}
			<StudentForm />
		</Container>
	);
};

export default StudentPage;

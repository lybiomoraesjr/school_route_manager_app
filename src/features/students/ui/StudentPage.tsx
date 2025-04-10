import { studentsMock } from "@/mock/students.mock";
import { SummaryCard } from "@/shared/components/SummaryCard/SummaryCard";
import { Container } from "@mantine/core";

const StudentPage = () => {
	return (
		<Container fluid>
			{studentsMock.map((student) => (
				<SummaryCard
					fields={[
						{ label: "Nome", value: student.name },
						{ label: "Telefone", value: student.phone },
						{ label: "Responsável", value: student.guardianName },
						{
							label: "Tel. Responsável",
							value: student.guardianPhone,
						},
					]}
				/>
			))}
		</Container>
	);
};

export default StudentPage;

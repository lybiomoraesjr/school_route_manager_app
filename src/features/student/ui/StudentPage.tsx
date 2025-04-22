import { StudentForm } from "@/features/student/components/StudentForm";
import { StudentsTable } from "@/features/student/components/StudentsTable";
import { studentsMock } from "@/mock/students.mock";
import { Modal } from "@/shared/components/Modal/Modal";
import { Button, Container, Flex } from "@mantine/core";
import { Plus } from "phosphor-react";
import { useState } from "react";

const StudentPage = () => {
	const [opened, setOpened] = useState(false);
	return (
		<Container fluid>
			<Flex justify="flex-end">
				<Button
					leftSection={<Plus size={18} weight="bold" />}
					onClick={() => setOpened(true)}
				>
					Novo Aluno
				</Button>
			</Flex>

			<StudentsTable students={studentsMock} />

			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title="Cadastrar Aluno"
			>
				<StudentForm onSubmit={() => setOpened(false)} />
			</Modal>
		</Container>
	);
};

export default StudentPage;

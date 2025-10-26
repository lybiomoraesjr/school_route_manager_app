import { StudentForm } from "@/features/student/components/StudentForm";
import { StudentsTable } from "@/features/student/components/StudentsTable";
import { studentsMock } from "@/mock/students.mock";
import { BaseModal } from "@/shared/components/Modal/BaseModal";
import { Button, Container, Flex } from "@mantine/core";
import { Plus } from "phosphor-react";
import { useState } from "react";

const StudentPage = () => {
	const [opened, setOpened] = useState(false);

	const handleSubmit = async () => {
		try {
			setTimeout(() => {}, 2000);

			setOpened(false);
		} catch (error) {
			console.error(error);
		} finally {
		}
	};

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

			<BaseModal
				opened={opened}
				onClose={() => setOpened(false)}
				title="Cadastrar Aluno"
			>
				<StudentForm onSubmit={handleSubmit} />
			</BaseModal>
		</Container>
	);
};

export default StudentPage;

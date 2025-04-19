import { Student } from "@/features/student/model/student.model";
import { Status } from "@/shared/types/enums";

export const studentsMock: Student[] = [
	{
		id: "1",
		name: "João da Silva",
		phone: "(11) 99999-9999",
		birthDate: "2005-03-10",
		address: {
			street: "Rua das Flores",
			number: "123",
			neighborhood: "Bairro das Flores",
			city: "São Paulo",
			zipCode: "12345-678",
			complement: "Apto 123",
		},
		guardianId: "1",
		status: Status.ACTIVE,
		cpf: "12345678901",
	},
	{
		id: "2",
		name: "Maria Oliveira",
		phone: "(11) 98888-8888",
		birthDate: "2005-03-10",
		address: {
			street: "Av. Central",
			number: "456",
			neighborhood: "Bairro Central",
			city: "São Paulo",
			zipCode: "12345-678",
			complement: "Apto 456",
		},
		guardianId: "2",
		status: Status.ACTIVE,
		cpf: "12345678902",
	},
];

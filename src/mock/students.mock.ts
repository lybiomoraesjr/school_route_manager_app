import { Student } from "@/features/student/schema/student.schema";
import { Status } from "@/shared/types/enums";

export const studentsMock: Student[] = [
	{
		id: "1",
		name: "João da Silva",
		birthDate: new Date("2005-03-10"),
		cpf: "12345678901",
		address: {
			street: "Rua das Flores",
			number: "123",
			neighborhood: "Bairro das Flores",
			city: "São Paulo",
			zipCode: "12345678",
			complement: "Apto 123",
			state: "SP",
		},
		status: Status.ACTIVE,
		contact: {
			phone: "11999999999",
			cellphone: "11999999999",
			email: "joao.silva@example.com",
		},
		guardianId: "1",
	},
	{
		id: "2",
		name: "Maria Oliveira",
		birthDate: new Date("2005-03-10"),
		cpf: "12345678902",
		address: {
			street: "Av. Central",
			number: "456",
			neighborhood: "Bairro Central",
			city: "São Paulo",
			zipCode: "12345678",
			complement: "Apto 456",
			state: "SP",
		},
		status: Status.ACTIVE,
		contact: {
			phone: "11988888888",
			cellphone: "11988888888",
			email: "maria.oliveira@example.com",
		},
		guardianId: "2",
	},
];

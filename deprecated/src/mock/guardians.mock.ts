import { Guardian } from "@/features/guardian/model/guardian.schema";
import { Status } from "@/shared/types/enums";

export const guardiansMock: Guardian[] = [
	{
		id: "1",
		name: "João da Silva",
		birthDate: new Date("1990-01-01"),
		cpf: "12345678901",
		address: {
			street: "Rua 1",
			number: "123",
			neighborhood: "Bairro 1",
			city: "São Paulo",
			zipCode: "12345678",
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
		birthDate: new Date("1990-01-01"),
		cpf: "12345678902",
		address: {
			street: "Rua 2",
			number: "456",
			neighborhood: "Bairro 2",
			city: "São Paulo",
			zipCode: "12345678",
			state: "SP",
		},
		status: Status.ACTIVE,
		contact: {
			phone: "11999999999",
			cellphone: "11999999999",
			email: "maria.oliveira@example.com",
		},
		guardianId: "2",
	},
];

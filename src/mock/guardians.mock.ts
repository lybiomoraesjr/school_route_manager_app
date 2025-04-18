import { Status } from "@/shared/types/enums";

export const guardiansMock = [
	{
		id: "1",
		name: "João da Silva",
		phone: "(11) 99999-9999",
		cpf: "12345678901",
		address: "Rua 1",
		birthDate: "1990-01-01",
		status: Status.ACTIVE,
	},
	{
		id: "2",
		name: "Maria Oliveira",
		phone: "(11) 99999-9999",
		cpf: "12345678902",
		address: "Rua 2",
		birthDate: "1990-01-01",
		status: Status.ACTIVE,
	},
];

import { Guardian } from "@/features/guardian/model/guardian.model";
import { Status } from "@/shared/types/enums";

export const guardiansMock: Guardian[] = [
	{
		id: "1",
		name: "João da Silva",
		phone: "(11) 99999-9999",
		cpf: "12345678901",
		address: {
			street: "Rua 1",
			number: "123",
			neighborhood: "Bairro 1",
			city: "São Paulo",
			zipCode: "12345-678",
		},
		birthDate: "1990-01-01",
		status: Status.ACTIVE,
	},
	{
		id: "2",
		name: "Maria Oliveira",
		phone: "(11) 99999-9999",
		cpf: "12345678902",
		address: {
			street: "Rua 2",
			number: "456",
			neighborhood: "Bairro 2",
			city: "São Paulo",
			zipCode: "12345-678",
		},
		birthDate: "1990-01-01",
		status: Status.ACTIVE,
	},
];

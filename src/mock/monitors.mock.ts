import { Monitor } from "@/features/monitor/model/monitor.model";
import { Status } from "@/shared/types/enums";

export const monitorsMock: Monitor[] = [
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
		name: "Ana Beatriz Gomes",
		phone: "(11) 98888-7777",
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
	{
		id: "3",
		name: "Carlos Henrique Lima",
		phone: "(11) 98765-4321",
		cpf: "12345678903",
		address: {
			street: "Rua 3",
			number: "789",
			neighborhood: "Bairro 3",
			city: "São Paulo",
			zipCode: "12345-678",
		},
		birthDate: "1990-01-01",
		status: Status.ACTIVE,
	},
];

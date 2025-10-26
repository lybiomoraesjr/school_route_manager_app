import { Driver } from "@/features/driver/model/driver.schema";
import { Status } from "@/shared/types/enums";

export const driversMock: Driver[] = [
	{
		id: "1",
		name: "João da Silva",
		cpf: "12345678901",
		address: {
			street: "Rua 1",
			number: "123",
			neighborhood: "Bairro 1",
			city: "São Paulo",
			zipCode: "12345678",
			state: "SP",
		},
		cnh: "12345678901",
		birthDate: new Date("1990-01-01"),
		status: Status.ACTIVE,
		contact: {
			phone: "11999999999",
			cellphone: "11999999999",
			email: "joao.silva@example.com",
		},
	},
	{
		id: "2",
		name: "Ana Beatriz Gomes",
		cpf: "12345678902",
		address: {
			street: "Rua 2",
			number: "456",
			neighborhood: "Bairro 2",
			city: "São Paulo",
			zipCode: "12345678",
			state: "SP",
		},
		cnh: "12345678902",
		birthDate: new Date("1990-01-01"),
		status: Status.ACTIVE,
		contact: {
			phone: "11999999999",
			cellphone: "11999999999",
			email: "ana.gomes@example.com",
		},
	},
	{
		id: "3",
		name: "Carlos Henrique Lima",
		cpf: "12345678903",
		address: {
			street: "Rua 3",
			number: "789",
			neighborhood: "Bairro 3",
			city: "São Paulo",
			zipCode: "12345678",
			state: "SP",
		},
		cnh: "12345678903",
		birthDate: new Date("1990-01-01"),
		status: Status.ACTIVE,
		contact: {
			phone: "11999999999",
			cellphone: "11999999999",
			email: "carlos.lima@example.com",
		},
	},
];

import { School } from "@/features/school/model/school.schema";

export const schoolsMock: School[] = [
	{
		id: "1",
		name: "Escola 1",
		address: {
			street: "Rua 1",
			number: "123",
			neighborhood: "Bairro 1",
			city: "São Paulo",
			zipCode: "12345678",
			state: "SP",
		},
		contact: {
			phone: "11999999999",
			cellphone: "11988887777",
			email: "escola1@gmail.com",
		},
	},
	{
		id: "2",
		name: "Escola 2",
		address: {
			street: "Rua 2",
			number: "456",
			neighborhood: "Bairro 2",
			city: "São Paulo",
			zipCode: "12345678",
			state: "SP",
		},
		contact: {
			phone: "11999999999",
			cellphone: "11988887777",
			email: "escola2@gmail.com",
		},
	},
	{
		id: "3",
		name: "Escola 3",
		address: {
			street: "Rua 3",
			number: "789",
			neighborhood: "Bairro 3",
			city: "São Paulo",
			zipCode: "12345678",
			state: "SP",
		},
		contact: {
			phone: "11999999999",
			cellphone: "11988887777",
			email: "escola3@gmail.com",
		},
	},
];

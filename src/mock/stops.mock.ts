import { Stop } from "@/features/stop/model/stop.model";
import { schoolsMock } from "@/mock/schools.mock";

export const stopsMock: Stop[] = [
	{
		id: "1",
		name: "Parada 1",
		address: {
			street: "Rua 1",
			number: "123",
			neighborhood: "Bairro 1",
			city: "São Paulo",
			zipCode: "12345-678",
		},
		latitude: "-23.5614",
		longitude: "-46.6917",
		school: schoolsMock[0],
	},
	{
		id: "2",
		name: "Parada 2",
		address: {
			street: "Rua 2",
			number: "456",
			neighborhood: "Bairro 2",
			city: "São Paulo",
			zipCode: "12345-678",
		},
		latitude: "-23.5614",
		longitude: "-46.6917",
		school: null,
	},
	{
		id: "3",
		name: "Parada 3",
		address: {
			street: "Rua 3",
			number: "789",
			neighborhood: "Bairro 3",
			city: "São Paulo",
			zipCode: "12345-678",
		},
		latitude: "-23.5614",
		longitude: "-46.6917",
		school: null,
	},
];

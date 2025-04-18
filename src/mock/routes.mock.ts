import { stopsMock } from "@/mock/stops.mock";

export const routesMock = [
	{
		id: "1",
		name: "Rota 1",
		description: "Descrição da Rota 1",
		school: "Escola 1",
		driver: "Motorista 1",
		vehicle: "Veículo 1",
		stops: [stopsMock[0], stopsMock[1], stopsMock[2]],
		endTime: "10:00",
		startTime: "08:00",
	},
	{
		id: "2",
		name: "Rota 2",
		description: "Descrição da Rota 2",
		school: "Escola 2",
		driver: "Motorista 2",
		vehicle: "Veículo 2",
		stops: [stopsMock[0], stopsMock[1], stopsMock[2]],
		endTime: "12:00",
		startTime: "10:00",
	},
	{
		id: "3",
		name: "Rota 3",
		description: "Descrição da Rota 3",
		school: "Escola 3",
		driver: "Motorista 3",
		vehicle: "Veículo 3",
		stops: [stopsMock[0], stopsMock[1], stopsMock[2]],
		endTime: "14:00",
		startTime: "12:00",
	},
];

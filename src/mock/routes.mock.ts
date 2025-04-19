import { stopsMock } from "@/mock/stops.mock";
import { Route } from "@/features/route/model/route.model";
import { schoolsMock } from "@/mock/schools.mock";
import { driversMock } from "@/mock/drivers.mock";
import { vehiclesMock } from "@/mock/vehicles.mock";

export const routesMock: Route[] = [
	{
		id: "1",
		name: "Rota 1",
		description: "Descrição da Rota 1",
		school: schoolsMock[0],
		driver: driversMock[0],
		vehicle: vehiclesMock[0],
		stops: [stopsMock[0], stopsMock[1], stopsMock[2]],
	},
	{
		id: "2",
		name: "Rota 2",
		description: "Descrição da Rota 2",
		school: schoolsMock[1],
		driver: driversMock[1],
		vehicle: vehiclesMock[1],
		stops: [stopsMock[0], stopsMock[1], stopsMock[2]],
	},
	{
		id: "3",
		name: "Rota 3",
		description: "Descrição da Rota 3",
		school: schoolsMock[2],
		driver: driversMock[2],
		vehicle: vehiclesMock[2],
		stops: [stopsMock[0], stopsMock[1], stopsMock[2]],
	},
];

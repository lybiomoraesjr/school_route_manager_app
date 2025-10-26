import { Vehicle } from "@/features/vehicles/model/vehicle.schema";
import { VehicleType } from "@/features/vehicles/model/vehicle.types";
import { Status } from "@/shared/types/enums";

export const vehiclesMock: Vehicle[] = [
	{
		id: "1",
		name: "Veículo 1",
		plate: "ABC1234",
		model: "Modelo 1",
		year: "2020",
		capacity: 10,
		type: VehicleType.VAN,
		status: Status.ACTIVE,
	},
	{
		id: "2",
		name: "Veículo 2",
		plate: "DEF5678",
		model: "Modelo 2",
		year: "2021",
		capacity: 20,
		type: VehicleType.BUS,
		status: Status.ACTIVE,
	},
	{
		id: "3",
		name: "Veículo 3",
		plate: "GHI9012",
		model: "Modelo 3",
		year: "2022",
		capacity: 30,
		type: VehicleType.BUS,
		status: Status.ACTIVE,
	},
];

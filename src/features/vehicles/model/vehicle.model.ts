import { VehicleType } from "@/features/vehicles/model/vehicle.types";
import { Status } from "@/shared/types";

export interface Vehicle {
	id: string;
	name: string;
	plate: string;
	model: string;
	year: string;
	capacity: number;
	type: VehicleType;
	status: Status;
}

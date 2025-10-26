import { Driver } from "@/features/driver/model/driver.schema";
import { School } from "@/features/school/model/school.schema";
import { Stop } from "@/features/stop/model/stop.schema";
import { Vehicle } from "@/features/vehicles/model/vehicle.schema";

export interface Route {
	id: string;
	name: string;
	description: string;
	school: School;
	driver: Driver;
	vehicle: Vehicle;
	stops: Stop[];
}

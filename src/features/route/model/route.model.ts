import { Driver } from "@/features/driver/schema/driver.schema";
import { School } from "@/features/school/model/school.model";
import { Stop } from "@/features/stop/model/stop.model";
import { Vehicle } from "@/features/vehicles/schema/vehicle.schema";

export interface Route {
	id: string;
	name: string;
	description: string;
	school: School;
	driver: Driver;
	vehicle: Vehicle;
	stops: Stop[];
}

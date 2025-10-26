import { Driver } from "@/features/driver/model/driver.schema";

export interface IDriverRepository {
	createDriver(driver: Driver): Promise<void>;
	getDrivers(): Promise<Driver[]>;
	getDriverById(id: string): Promise<Driver>;
	updateDriver(id: string, driver: Driver): Promise<void>;
	deleteDriver(id: string): Promise<void>;
}

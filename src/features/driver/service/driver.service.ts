import { Driver } from "@/features/driver/model/driver.schema";
import { IDriverRepository } from "@/libs/core/contracts/driver.repository.contract";

export class DriverService {
	constructor(private readonly api: IDriverRepository) {}

	async registerDriver(driver: Driver): Promise<void> {
		return this.api.createDriver(driver);
	}

	async listDrivers(): Promise<Driver[]> {
		return this.api.getDrivers();
	}

	async findDriver(id: string): Promise<Driver> {
		return this.api.getDriverById(id);
	}

	async updateDriver(id: string, driver: Driver): Promise<void> {
		return this.api.updateDriver(id, driver);
	}

	async deleteDriver(id: string): Promise<void> {
		return this.api.deleteDriver(id);
	}
}

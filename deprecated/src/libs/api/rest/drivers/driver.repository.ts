import { httpClient } from "../api.client";
import { driverMapper } from "./driver.repository.mapper";
import { CriarMotoristaDTO, MotoristaDTO } from "./driver.repository.dto";
import { IDriverRepository } from "@/libs/core/contracts/driver.repository.contract";
import { Driver } from "@/features/driver/model/driver.schema";
import { API_ROUTES } from "@/libs/api/rest/api.constants";

export class ApiDriverRepository implements IDriverRepository {
	async createDriver(driver: Driver): Promise<void> {
		const dto: CriarMotoristaDTO = driverMapper.toApi(driver);
		await httpClient.post(API_ROUTES.DRIVERS, dto);
	}

	async getDrivers(): Promise<Driver[]> {
		const response = await httpClient.get<MotoristaDTO[]>(
			API_ROUTES.DRIVERS
		);
		return response.data.map(driverMapper.fromApi);
	}

	async getDriverById(id: string): Promise<Driver> {
		const response = await httpClient.get<MotoristaDTO>(
			API_ROUTES.DRIVER_BY_ID(id)
		);
		return driverMapper.fromApi(response.data);
	}

	async updateDriver(id: string, driver: Driver): Promise<void> {
		const dto: CriarMotoristaDTO = driverMapper.toApi(driver);
		await httpClient.put(API_ROUTES.DRIVER_BY_ID(id), dto);
	}

	async deleteDriver(id: string): Promise<void> {
		await httpClient.delete(API_ROUTES.DRIVER_BY_ID(id));
	}
}

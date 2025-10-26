import { httpClient } from "../api.client";
import { Guardian } from "@/features/guardian/model/guardian.schema";
import { CriarResponsavelDTO, ResponsavelDTO } from "./guardian.repository.dto";
import { IGuardianRepository } from "@/libs/core/contracts/guardian.repository.contract";
import { guardianMapper } from "@/libs/api/rest/guardians/student.repository.mapper";
import { API_ROUTES } from "@/libs/api/rest/api.constants";

export class ApiGuardianRepository implements IGuardianRepository {
	async createGuardian(guardian: Guardian): Promise<void> {
		const dto: CriarResponsavelDTO = guardianMapper.toApi(guardian);
		await httpClient.post(API_ROUTES.GUARDIANS, dto);
	}

	async getGuardians(): Promise<Guardian[]> {
		const response = await httpClient.get<ResponsavelDTO[]>(
			API_ROUTES.GUARDIANS
		);
		return response.data.map(guardianMapper.fromApi);
	}

	async getGuardianById(id: string): Promise<Guardian> {
		const response = await httpClient.get<ResponsavelDTO>(
			API_ROUTES.GUARDIAN_BY_ID(id)
		);
		return guardianMapper.fromApi(response.data);
	}
}

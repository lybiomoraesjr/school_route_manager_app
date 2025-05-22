import { httpClient } from "../api.client";
import { Guardian } from "@/features/guardian/schema/guardian.schema";
import { CriarResponsavelDTO, ResponsavelDTO } from "./guardian.repository.dto";
import { IGuardianRepository } from "@/libs/core/contracts/guardian.repository.contract";
import { guardianMapper } from "@/libs/api/rest/guardians/student.repository.mapper";

export class ApiGuardianRepository implements IGuardianRepository {
	async createGuardian(guardian: Guardian): Promise<void> {
		const dto: CriarResponsavelDTO = guardianMapper.toApi(guardian);
		await httpClient.post("/responsaveis", dto);
	}

	async getGuardians(): Promise<Guardian[]> {
		const response =
			await httpClient.get<ResponsavelDTO[]>("/responsaveis");
		return response.data.map(guardianMapper.fromApi);
	}

	async getGuardianById(id: string): Promise<Guardian> {
		const response = await httpClient.get<ResponsavelDTO>(
			`/responsaveis/${id}`
		);
		return guardianMapper.fromApi(response.data);
	}
}

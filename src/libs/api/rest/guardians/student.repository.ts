import { httpClient } from "../api.client";
import { IGuardianRepository } from "../../core/contracts/guardian.repository.contract";
import { Guardian } from "@/features/guardian/model/guardian.model";
import { CriarResponsavelDTO, ResponsavelDTO } from "./guardian.repository.dto";
import { guardianMapper } from "@/libs/api/guardians/student.repository.mapper";

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

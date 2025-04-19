import { IGuardianRepository } from "@/libs/api/guardians/guardian.repository.contract";
import { Guardian } from "../model/guardian.model";

export class GuardianService {
	constructor(private readonly repository: IGuardianRepository) {}

	async registerGuardian(guardian: Guardian): Promise<void> {
		return this.repository.createGuardian(guardian);
	}

	async listGuardians(): Promise<Guardian[]> {
		return this.repository.getGuardians();
	}

	async findGuardian(id: string): Promise<Guardian> {
		return this.repository.getGuardianById(id);
	}
}

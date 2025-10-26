import { Guardian } from "@/features/guardian/model/guardian.schema";

export interface IGuardianRepository {
	createGuardian(guardian: Guardian): Promise<void>;
	getGuardians(): Promise<Guardian[]>;
	getGuardianById(id: string): Promise<Guardian>;
}

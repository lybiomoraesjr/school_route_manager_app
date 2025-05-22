import { Guardian } from "@/features/guardian/schema/guardian.schema";

export interface IGuardianRepository {
	createGuardian(guardian: Guardian): Promise<void>;
	getGuardians(): Promise<Guardian[]>;
	getGuardianById(id: string): Promise<Guardian>;
}

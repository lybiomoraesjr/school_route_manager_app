import { School } from "@/features/school/model/school.model";
import { Address } from "@/shared/schemas";

export interface Stop {
	id: string;
	name: string;
	address: Address;
	latitude: string;
	longitude: string;
	school: School | null;
}

import { Person } from "@/shared/schemas";

export interface Student extends Person {
	id: string;
	guardianId: string;
}

import { Person } from "@/shared/models/person.model";

export interface Student extends Person {
	guardianId: string;
}

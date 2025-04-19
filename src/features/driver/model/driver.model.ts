import { Person } from "@/shared/models/person.model";

export interface Driver extends Person {
	cnh: string;
}

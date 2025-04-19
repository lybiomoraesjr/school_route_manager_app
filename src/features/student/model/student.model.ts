import { Guardian } from "@/features/guardian/model/student.model";
import { Person } from "@/shared/models/person.model";

export interface Student extends Person {
	school: string;
	route: string;
	guardian: Guardian;
}

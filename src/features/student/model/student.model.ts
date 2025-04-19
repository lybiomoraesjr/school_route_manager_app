import { Guardian } from "@/features/guardian/model/guardian.model";
import { Person } from "@/shared/models/person.model";

export interface Student extends Person {
	guardian: Guardian;
}

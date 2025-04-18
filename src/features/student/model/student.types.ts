import { Guardian } from "@/features/guardian/model/guardian.types";
import { Status } from "@/shared/types/enums/status";
import { Person } from "@/shared/types/person";

export type Student = Person & {
	school: string;
	route: string;
	guardian: Guardian;
};

export type CreateStudentDTO = {
	name: string;
	phone: string;
	birth_date: string;
	address_street: string;
	address_number: string;
	school: string;
	route: string;
	guardian_name: string;
	guardian_phone: string;
};

export type StudentResponseDTO = CreateStudentDTO & {
	id: string;
	status: Status;
};

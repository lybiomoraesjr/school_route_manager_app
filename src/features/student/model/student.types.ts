import { Status } from "@/shared/types/enums/status";

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

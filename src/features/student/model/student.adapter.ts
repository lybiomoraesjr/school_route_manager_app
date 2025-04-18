import { Student, CreateStudentDTO } from "./student.types";
import { Status } from "@/shared/types/enums/status";

export const studentToCreateDto = (student: Student): CreateStudentDTO => ({
	name: student.name,
	phone: student.phone,
	birth_date: student.birthDate,
	address_street: student.address.street,
	address_number: student.address.number,
	school: student.school,
	route: student.route,
	guardian_name: student.guardian.name,
	guardian_phone: student.guardian.phone,
});

export const createStudentDtoToEntity = (dto: CreateStudentDTO): Student => ({
	name: dto.name,
	phone: dto.phone,
	birthDate: dto.birth_date,
	cpf: "",
	address: {
		street: dto.address_street,
		number: dto.address_number,
		neighborhood: "",
		city: "",
		zipCode: "",
	},
	school: dto.school,
	route: dto.route,
	status: Status.ACTIVE,
	guardian: {
		name: dto.guardian_name,
		phone: dto.guardian_phone,
		cpf: "",
		birthDate: "",
		address: {
			street: "",
			number: "",
			neighborhood: "",
			city: "",
			zipCode: "",
		},
		status: Status.ACTIVE,
	},
});

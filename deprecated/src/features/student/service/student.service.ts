import { Student } from "@/features/student/model/student.schema";
import { IStudentRepository } from "@/libs/core/contracts/student.repository.contract";

export class StudentService {
	constructor(private readonly api: IStudentRepository) {}

	async registerStudent(student: Student): Promise<void> {
		return this.api.createStudent(student);
	}

	async listStudents(): Promise<Student[]> {
		return this.api.getStudents();
	}

	async findStudent(id: string): Promise<Student> {
		return this.api.getStudentById(id);
	}
}

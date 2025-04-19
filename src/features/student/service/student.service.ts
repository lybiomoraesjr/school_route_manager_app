import { IStudentRepository } from "@/libs/api/students/student.repository.contract";
import { Student } from "../model/student.model";

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

import { Student } from "@/features/student/model/student.model";

export interface IStudentRepository {
	createStudent(student: Student): Promise<void>;
	getStudents(): Promise<Student[]>;
	getStudentById(id: string): Promise<Student>;
}

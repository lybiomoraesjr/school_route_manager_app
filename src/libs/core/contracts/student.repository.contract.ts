import { Student } from "@/features/student/schema/student.schema";

export interface IStudentRepository {
	createStudent(student: Student): Promise<void>;
	getStudents(): Promise<Student[]>;
	getStudentById(id: string): Promise<Student>;
}

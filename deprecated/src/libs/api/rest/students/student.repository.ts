import { httpClient } from "../api.client";
import { studentMapper } from "./student.repository.mapper";
import { CriarAlunoDTO, AlunoDTO } from "./student.repository.dto";
import { IStudentRepository } from "@/libs/core/contracts/student.repository.contract";
import { Student } from "@/features/student/model/student.schema";
import { API_ROUTES } from "@/libs/api/rest/api.constants";

export class ApiStudentRepository implements IStudentRepository {
	async createStudent(student: Student): Promise<void> {
		const dto: CriarAlunoDTO = studentMapper.toApi(student);
		await httpClient.post(API_ROUTES.STUDENTS, dto);
	}

	async getStudents(): Promise<Student[]> {
		const response = await httpClient.get<AlunoDTO[]>(API_ROUTES.STUDENTS);
		return response.data.map(studentMapper.fromApi);
	}

	async getStudentById(id: string): Promise<Student> {
		const response = await httpClient.get<AlunoDTO>(
			API_ROUTES.STUDENT_BY_ID(id)
		);
		return studentMapper.fromApi(response.data);
	}
}

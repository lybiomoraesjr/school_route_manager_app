import { httpClient } from "../api.client";
import { studentMapper } from "./student.repository.mapper";
import { IStudentRepository } from "./student.repository.contract";
import { Student } from "@/features/student/model/student.model";
import { CriarAlunoDTO, AlunoDTO } from "./student.repository.dto";

export class ApiStudentRepository implements IStudentRepository {
	async createStudent(student: Student): Promise<void> {
		const dto: CriarAlunoDTO = studentMapper.toApi(student);
		await httpClient.post("/alunos", dto);
	}

	async getStudents(): Promise<Student[]> {
		const response = await httpClient.get<AlunoDTO[]>("/alunos");
		return response.data.map(studentMapper.fromApi);
	}

	async getStudentById(id: string): Promise<Student> {
		const response = await httpClient.get<AlunoDTO>(`/alunos/${id}`);
		return studentMapper.fromApi(response.data);
	}
}

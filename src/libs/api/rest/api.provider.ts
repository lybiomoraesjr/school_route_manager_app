import { StudentService } from "@/features/student/service/student.service";
import { IStudentRepository } from "../../core/contracts/student.repository.contract";
import { IGuardianRepository } from "@/libs/core/contracts/guardian.repository.contract";
import { GuardianService } from "@/features/guardian/service/guardian.service";
import { ApiStudentRepository } from "@/libs/api/rest/students/student.repository";
import { ApiGuardianRepository } from "@/libs/api/rest/guardians/student.repository";

const studentRepository: IStudentRepository = new ApiStudentRepository();
export const studentService = new StudentService(studentRepository);

const guardianRepository: IGuardianRepository = new ApiGuardianRepository();
export const guardianService = new GuardianService(guardianRepository);

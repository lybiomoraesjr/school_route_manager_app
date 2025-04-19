import { ApiStudentRepository } from "./students/student.repository";
import { StudentService } from "@/features/student/service/student.service";
import { IStudentRepository } from "./students/student.repository.contract";
import { ApiGuardianRepository } from "@/libs/api/guardians/student.repository";
import { IGuardianRepository } from "@/libs/api/guardians/guardian.repository.contract";
import { GuardianService } from "@/features/guardian/service/guardian.service";

const studentRepository: IStudentRepository = new ApiStudentRepository();
export const studentService = new StudentService(studentRepository);

const guardianRepository: IGuardianRepository = new ApiGuardianRepository();
export const guardianService = new GuardianService(guardianRepository);

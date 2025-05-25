import { ApiStudentRepository } from "@/libs/api/rest/students/student.repository";
import { ApiGuardianRepository } from "@/libs/api/rest/guardians/student.repository";
import { ApiAuthRepository } from "@/libs/api/rest/auth/api.auth.repository";

import { IStudentRepository } from "@/libs/core/contracts/student.repository.contract";
import { IGuardianRepository } from "@/libs/core/contracts/guardian.repository.contract";
import { IAuthRepository } from "@/libs/core/contracts/auth.repository.contract";

import { StudentService } from "@/features/student/service/student.service";
import { GuardianService } from "@/features/guardian/service/guardian.service";
import { AuthService } from "@/features/auth/service/auth.service";

const studentRepository: IStudentRepository = new ApiStudentRepository();
const guardianRepository: IGuardianRepository = new ApiGuardianRepository();
const authRepository: IAuthRepository = new ApiAuthRepository();

export const studentService = new StudentService(studentRepository);
export const guardianService = new GuardianService(guardianRepository);
export const authService = new AuthService(authRepository);

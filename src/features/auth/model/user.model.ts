import { UserRole } from "@/features/auth/model/user.types";

export interface User {
	id: string;
	name: string;
	role: UserRole;
	email?: string;
	cpf?: string;
	birthDate?: string;
}

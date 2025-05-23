import { UserRole } from "@/features/auth/model/user.types";

export interface User {
	id: string;
	role: UserRole;
}

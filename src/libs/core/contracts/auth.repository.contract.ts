import { User } from "@/features/auth/model/user.model";

export interface IAuthRepository {
	signIn(
		email: string,
		password: string
	): Promise<{ user: User; token: string }>;
}

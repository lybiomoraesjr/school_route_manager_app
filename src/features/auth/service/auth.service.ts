import { IAuthRepository } from "@/libs/core/contracts/auth.repository.contract";
import { User } from "../model/user.model";

export class AuthService {
	constructor(private readonly authRepo: IAuthRepository) {}

	async authenticate(
		email: string,
		password: string
	): Promise<{ user: User; token: string }> {
		return this.authRepo.signIn(email, password);
	}
}

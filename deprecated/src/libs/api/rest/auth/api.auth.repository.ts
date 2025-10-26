import { IAuthRepository } from "@/libs/core/contracts/auth.repository.contract";
import { httpClient } from "../api.client";
import { API_ROUTES } from "@/libs/api/rest/api.constants";

export class ApiAuthRepository implements IAuthRepository {
	async signIn(email: string, password: string) {
		const { data } = await httpClient.post(API_ROUTES.AUTH, {
			email,
			password,
		});
		return data;
	}
}

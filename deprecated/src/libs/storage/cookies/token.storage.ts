import { COOKIES_KEYS } from "@/config/storage.config";
import {
	setAppCookie,
	getAppCookie,
	removeAppCookie,
} from "@/libs/storage/cookies/cookies";

export const saveAuthTokenCookie = (token: string) => {
	setAppCookie(COOKIES_KEYS.AUTH_TOKEN, token);
};

export const getAuthTokenCookie = (): string | undefined => {
	return getAppCookie(COOKIES_KEYS.AUTH_TOKEN) as string | undefined;
};

export const removeAuthTokenCookie = () => {
	removeAppCookie(COOKIES_KEYS.AUTH_TOKEN);
};

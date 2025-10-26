import { setCookie, getCookie, deleteCookie } from "cookies-next";

export const setAppCookie = (
	key: string,
	value: string,
	maxAge = 60 * 60 * 24 * 7
) => {
	setCookie(key, value, { maxAge, path: "/" });
};

export const getAppCookie = (key: string) => {
	return getCookie(key);
};

export const removeAppCookie = (key: string) => {
	deleteCookie(key);
};

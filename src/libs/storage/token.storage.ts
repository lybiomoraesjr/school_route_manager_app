import { COOKIES_KEYS } from "@/config/storage.config";
import {
  setAppCookie,
  getAppCookie,
  removeAppCookie,
} from "@/libs/storage/cookies";

export const storageAuthTokenSave = (token: string) => {
  setAppCookie(COOKIES_KEYS.AUTH_TOKEN, token);
};

export const storageAuthTokenGet = (): string | undefined => {
  return getAppCookie(COOKIES_KEYS.AUTH_TOKEN) as string | undefined;
};

export const storageAuthTokenRemove = () => {
  removeAppCookie(COOKIES_KEYS.AUTH_TOKEN);
};

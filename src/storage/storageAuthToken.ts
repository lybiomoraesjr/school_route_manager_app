import { AUTH_TOKEN_STORAGE } from "@/storage/storageConfig";

export const storageAuthTokenSave = (token: string) => {
  localStorage.setItem(AUTH_TOKEN_STORAGE, token);
};
export const storageAuthTokenGet = () => {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE);
  return token;
};

export const storageAuthTokenRemove = () => {
  localStorage.removeItem(AUTH_TOKEN_STORAGE);
};

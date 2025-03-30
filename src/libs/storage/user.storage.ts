import { LOCAL_STORAGE_KEYS } from "@/config/storage.config";
import { UserDTO } from "@/dtos/user.dto";

export const storageUserSave = (user: UserDTO) => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(user));
};

export const storageUserGet = () => {
  const storage = localStorage.getItem(LOCAL_STORAGE_KEYS.USER);

  const user: UserDTO = storage ? JSON.parse(storage) : {};

  return user;
};

export const storageUserRemove = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
};

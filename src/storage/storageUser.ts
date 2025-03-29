import { UserDTO } from "@/dtos/UserDTO";
import { USER_STORAGE } from "./storageConfig";

export const storageUserSave = (user: UserDTO) => {
  localStorage.setItem(USER_STORAGE, JSON.stringify(user));
};

export const storageUserGet = () => {
  const storage = localStorage.getItem(USER_STORAGE);

  const user: UserDTO = storage ? JSON.parse(storage) : {};

  return user;
};

export const storageUserRemove = () => {
  localStorage.removeItem(USER_STORAGE);
};

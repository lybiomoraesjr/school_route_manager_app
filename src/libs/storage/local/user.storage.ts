import { LOCAL_STORAGE_KEYS } from "@/config/storage.config";
import { User } from "@/features/auth/model/user.model";

export const saveUserToLocalStorage = (user: User) => {
	localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
	const storage = localStorage.getItem(LOCAL_STORAGE_KEYS.USER);

	const user: User = storage ? JSON.parse(storage) : {};

	return user;
};

export const removeUserFromLocalStorage = () => {
	localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
};

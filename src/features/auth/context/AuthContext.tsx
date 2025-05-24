import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "@/features/auth/model/user.model";
import {
	saveUserToLocalStorage,
	getUserFromLocalStorage,
	removeUserFromLocalStorage,
} from "@/libs/storage/local/user.storage";
import {
	saveAuthTokenCookie,
	getAuthTokenCookie,
	removeAuthTokenCookie,
} from "@/libs/storage/cookies/token.storage";
import { authService } from "@/libs/api/rest/api.provider";
import { UserRole } from "@/features/auth/model/user.types";

export type AuthContextDataProps = {
	user: User;
	isLoadingUserStorageData: boolean;
	signIn: (email: string, password: string) => Promise<void>;
	signOut: () => void;
};

export const AuthContext = createContext<AuthContextDataProps>(
	{} as AuthContextDataProps
);

type AuthContextProviderProps = {
	children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const [user, setUser] = useState<User>({} as User);
	const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
		useState(true);

	// const userAndTokenUpdate = async (userData: User, token: string) => {
	// 	api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	// 	setUser(userData);
	// };

	const persistUserAndToken = (userData: User, token: string) => {
		try {
			setIsLoadingUserStorageData(true);
			saveUserToLocalStorage(userData);
			saveAuthTokenCookie(token);
		} catch (error) {
			throw error;
		} finally {
			setIsLoadingUserStorageData(false);
		}
	};

	const signIn = async (email: string, password: string) => {
		try {
			setIsLoadingUserStorageData(true);
			const { user, token } = await authService.authenticate(
				email,
				password
			);
			persistUserAndToken(user, token);
			// userAndTokenUpdate(user, token);
		} catch (error) {
			throw error;
		} finally {
			setIsLoadingUserStorageData(false);
		}
	};

	const signOut = () => {
		try {
			setIsLoadingUserStorageData(true);
			setUser({} as User);
			removeUserFromLocalStorage();
			removeAuthTokenCookie();
		} catch (error) {
			throw error;
		} finally {
			setIsLoadingUserStorageData(false);
		}
	};

	const loadUserData = async () => {
		try {
			setIsLoadingUserStorageData(true);
			const userLogged = getUserFromLocalStorage();
			const token = getAuthTokenCookie();

			if (token && userLogged) {
				// userAndTokenUpdate(userLogged, token);
			}
		} catch (error) {
			throw error;
		} finally {
			setIsLoadingUserStorageData(false);
		}
	};

	useEffect(() => {
		loadUserData();
	}, []);

	// TODO: check if the token is valid and update the user, if not, log the user out
	// useEffect(() => {
	// 	const unsubscribe = api.registerInterceptTokenManager(signOut);
	// 	return () => unsubscribe();
	// }, [signOut]);

	useEffect(() => {
		setUser({
			id: "123",
			role: UserRole.ADMIN,
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoadingUserStorageData,
				signIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

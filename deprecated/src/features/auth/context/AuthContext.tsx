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
import { authService } from "@/libs/providers/api.providers";
import { UserRole } from "@/features/auth/model/user.types";
import {
	AuthContextDataProps,
	SignInParams,
	StoreSessionParams,
} from "@/features/auth/context/auth.context.types";

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

	// const applySession = ({ userData, token }: StoreSessionParams) => {
	// 	tokenManager.setToken(token);
	// 	setUser(userData);
	// };

	const storeSession = ({ userData, token }: StoreSessionParams) => {
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

	const signIn = async ({ email, password }: SignInParams) => {
		try {
			setIsLoadingUserStorageData(true);
			const { user, token } = await authService.authenticate(
				email,
				password
			);
			storeSession({ userData: user, token });
			// applySession({ userData: user, token });
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

	const restoreSession = async () => {
		try {
			setIsLoadingUserStorageData(true);
			const userLogged = getUserFromLocalStorage();
			const token = getAuthTokenCookie();

			if (token && userLogged) {
				setUser(userLogged);
			}
		} catch (error) {
			throw error;
		} finally {
			setIsLoadingUserStorageData(false);
		}
	};

	useEffect(() => {
		restoreSession();
	}, []);

	// TODO: check if the token is valid and update the user, if not, log the user out
	// useEffect(() => {
	// 	const unsubscribe = api.registerInterceptTokenManager(signOut);
	// 	return () => unsubscribe();
	// }, [signOut]);

	// TODO: refresh token if it's expired

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

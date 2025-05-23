import { User } from "@/features/auth/model/user.model";
import { UserRole } from "@/features/auth/model/user.types";
import { createContext, ReactNode, useEffect, useState } from "react";

export type AuthContextDataProps = {
	user: User;
};

export const AuthContext = createContext<AuthContextDataProps>(
	{} as AuthContextDataProps
);

type AuthContextProviderProps = {
	children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const [user, setUser] = useState<User>({} as User);

	useEffect(() => {
		setUser({
			id: "1",
			role: UserRole.ADMIN,
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

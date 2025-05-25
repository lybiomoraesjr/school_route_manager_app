import { User } from "@/features/auth/model/user.model";

export type SignInParams = {
	email: string;
	password: string;
};

export type StoreSessionParams = {
	userData: User;
	token: string;
};

export type AuthContextDataProps = {
	user: User;
	isLoadingUserStorageData: boolean;
	signIn: (params: SignInParams) => Promise<void>;
	signOut: () => void;
};

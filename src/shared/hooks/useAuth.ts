import { AuthContext } from "@/features/auth/context/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
	const context = useContext(AuthContext);

	return context;
};

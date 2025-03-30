import { AuthContext } from "@/context";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

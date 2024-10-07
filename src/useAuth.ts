import { useContext } from "react";
import { AuthContext } from "./authContext";
import { AuthContextType } from "./authContext";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Esto corresponde a un error");
  }
  return context;
};

import { createContext, useContext } from "react";

export interface IAuthContext {
  isAuth: boolean;
  setAuth: (isAuth: boolean) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const useAuthContext = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContext.Provider"
    );
  }
  return context;
};

import { useState } from "react";
import { AuthContext } from "./useAuthContext";
import { AuthorizedSpaceLayout } from "../components/templates";
import { NavigationMenu } from "../components/organisms";

export const AuthProvider = () => {
  const [isAuth, setAuth] = useState<boolean>(
    Boolean(localStorage.getItem("accessToken"))
  );

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setAuth }}>
        <AuthorizedSpaceLayout drawer={<NavigationMenu />} />
      </AuthContext.Provider>
    </>
  );
};

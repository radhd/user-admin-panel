import { useState } from "react";
import { AuthContext } from "./useAuthContext";
import { AuthorizedSpaceLayout } from "../components/templates/AuthorizedSpaceLayout/AuthorizedSpaceLayout";

export const AuthProvider = () => {
  const [isAuth, setAuth] = useState<boolean>(
    Boolean(localStorage.getItem("accessToken"))
  );

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setAuth }}>
        <AuthorizedSpaceLayout />
      </AuthContext.Provider>
    </>
  );
};

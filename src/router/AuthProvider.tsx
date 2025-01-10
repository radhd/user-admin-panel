import { useState } from "react";
import { AuthContext } from "./useAuthContext";
import { AuthorizedSpaceLayout } from "../components/templates/AuthorizedSpaceLayout/AuthorizedSpaceLayout";
import { APDrawer } from "../components/molecules/APDrawer/APDrawer";

export const AuthProvider = () => {
  const [isAuth, setAuth] = useState<boolean>(
    Boolean(localStorage.getItem("accessToken"))
  );

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setAuth }}>
        <APDrawer>
          {/* TODO: CREATE LAYOUT FOR WEBSITE */}
          <AuthorizedSpaceLayout />
        </APDrawer>
      </AuthContext.Provider>
    </>
  );
};

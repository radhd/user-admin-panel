import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const PrivateRoutes = () => {
  const { isAuth } = useAuthContext();

  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

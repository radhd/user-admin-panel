import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken, selectRefreshToken } from "../services/auth";
import { logout, setCredentials } from "../services/auth/authState";
import { useRefreshAuthSessionMutation } from "../services/auth/authApi";
import { AuthorizedSpaceLayout } from "../components/templates";

export const PrivateRoutes = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const refreshToken = useSelector(selectRefreshToken);
  const [refreshAuthSession] = useRefreshAuthSessionMutation();

  if (!accessToken && refreshToken) {
    refreshAuthSession({ refreshToken })
      .unwrap()
      .then((response) => {
        dispatch(
          setCredentials({
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
            user: response.user,
          })
        );
      })
      .catch((error) => {
        console.error("Token refresh failed:", error);
        dispatch(logout());
      });
  }

  if (
    !localStorage.getItem("accessToken") &&
    !localStorage.getItem("refreshToken")
  ) {
    return <Navigate to="/login" replace />;
  }

  return <AuthorizedSpaceLayout />;
};

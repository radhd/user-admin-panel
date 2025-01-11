import { useDispatch } from "react-redux";
import { logout } from "../../services/auth/authState";
import { UserProfile } from "./components/UserProfile";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <div>DashboardPage</div>
      <UserProfile />
      <button onClick={handleLogout}>logout</button>
    </>
  );
};

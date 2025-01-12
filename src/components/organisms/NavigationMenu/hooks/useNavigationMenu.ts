import { logout } from "@/services/auth";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getNavigationPanelItems } from "../constants/navigationPanelItems";
import { NAVIGATION_PATH } from "../constants/navigationPath";

export const useNavigationMenu = (handleDrawerClose: () => void) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate(NAVIGATION_PATH.login);
  };

  const handleDashboardNavigation = () => {
    navigate(NAVIGATION_PATH.dashboard);
    handleDrawerClose();
  };

  const handleTableNavigation = () => {
    navigate(NAVIGATION_PATH.users);
    handleDrawerClose();
  };

  const navigationPanelItems = getNavigationPanelItems(
    handleDashboardNavigation,
    handleTableNavigation,
    location.pathname
  );

  return {
    handleLogout,
    handleDashboardNavigation,
    handleTableNavigation,
    navigationPanelItems,
  };
};

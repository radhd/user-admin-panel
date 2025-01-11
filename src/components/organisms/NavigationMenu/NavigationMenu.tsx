import type { ReactNode } from "react";
import { APDrawer, APNavBar, useAPDrawer } from "../../molecules";
import { getNavigationPanelItems } from "./constants/navigationPanelItems";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/services/auth";
import { createUserMenuItems } from "./helpers";

interface INavigationMenu {
  children?: ReactNode;
}

export const NavigationMenu = ({ children }: INavigationMenu) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    mobileOpen,
    handleDrawerClose,
    handleDrawerTransitionEnd,
    handleDrawerToggle,
  } = useAPDrawer();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleDashboardNavigation = () => {
    navigate("/dashboard");
    handleDrawerClose();
  };

  const handleTableNavigation = () => {
    navigate("/table");
    handleDrawerClose();
  };

  const userMenuItems = createUserMenuItems(handleLogout);
  const navigationPanelItems = getNavigationPanelItems(
    handleDashboardNavigation,
    handleTableNavigation
  );

  return (
    <>
      <APDrawer
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        items={navigationPanelItems}
        navigation={
          <APNavBar
            handleDrawerToggle={handleDrawerToggle}
            userSettingsMenu={userMenuItems}
          />
        }
      >
        {children}
      </APDrawer>
    </>
  );
};

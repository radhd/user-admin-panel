import type { ReactNode } from "react";
import { APDrawer, APNavBar, useAPDrawer } from "../../molecules";
import { navigationPanelItems } from "./constants/navigationPanelItems";
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

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const {
    mobileOpen,
    handleDrawerClose,
    handleDrawerTransitionEnd,
    handleDrawerToggle,
  } = useAPDrawer();

  const userMenuItems = createUserMenuItems(handleLogout);

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

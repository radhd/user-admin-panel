import type { ReactNode } from "react";
import { APDrawer, APNavBar, useAPDrawer } from "../../molecules";
import { createUserMenuItems } from "./helpers";
import { useNavigationMenu } from "./hooks/useNavigationMenu";

interface INavigationMenu {
  children?: ReactNode;
}

export const NavigationMenu = ({ children }: INavigationMenu) => {
  const {
    mobileOpen,
    handleDrawerClose,
    handleDrawerTransitionEnd,
    handleDrawerToggle,
  } = useAPDrawer();

  const { handleLogout, navigationPanelItems } =
    useNavigationMenu(handleDrawerClose);

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

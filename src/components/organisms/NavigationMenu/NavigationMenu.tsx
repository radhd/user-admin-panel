import type { ReactNode } from "react";
import { APDrawer, APNavBar, useAPDrawer } from "../../molecules";
import { navigationPanelItems } from "./constants/navigationPanelItems";
import { userMenuItems } from "./constants/userMenuItems";

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

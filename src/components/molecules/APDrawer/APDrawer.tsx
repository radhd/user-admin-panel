import type { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import type { DrawerProps } from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { DrawerBody } from "./components/DrawerBody";
import {
  StyledAPDrawerPermanent,
  StyledAPDrawerTemporary,
} from "./StyledAPDrawer.styled";
import type { IDrawerBodyItems } from "./components/DrawerBodyItems.types";

interface IAPDrawer extends DrawerProps {
  logo?: ReactNode;
  mobileOpen: boolean;
  children?: ReactNode;
  navigation?: ReactNode;
  items?: IDrawerBodyItems[];
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
}

export const APDrawer = ({
  logo = "Logo",
  mobileOpen,
  children,
  navigation,
  items,
  handleDrawerClose,
  handleDrawerTransitionEnd,
}: IAPDrawer) => {
  const drawer = (
    <div>
      <Toolbar>{logo}</Toolbar>
      <Divider />
      <DrawerBody items={items} />
    </div>
  );

  return (
    <>
      <CssBaseline />
      {navigation}
      <StyledAPDrawerTemporary
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </StyledAPDrawerTemporary>
      <StyledAPDrawerPermanent variant="permanent" open>
        {drawer}
      </StyledAPDrawerPermanent>
      {children}
    </>
  );
};

import { useState } from "react";
import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import type { DrawerProps } from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { DRAWER_WIDTH } from "./constants";
import { DrawerBody } from "./components/DrawerBody";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import {
  StyledAPDrawerPermanent,
  StyledAPDrawerTemporary,
} from "./StyledAPDrawer.styled";

interface IAPDrawer extends DrawerProps {
  logo?: ReactNode;
  children?: ReactNode;
}

export const APDrawer = ({ logo = "Logo", children }: IAPDrawer) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar>{logo}</Toolbar>
      <Divider />
      <DrawerBody />
    </div>
  );

  return (
    <Box display="flex">
      <CssBaseline />
      {/* TODO: Put Navigation here and remove this one is for testing */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="nav" width={{ sm: DRAWER_WIDTH }} flexShrink={{ sm: 0 }}>
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
      </Box>
      {/* TODO: CREATE MAIN LAYOUT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Toolbar />
        {/* TODO: PUT HERE WEBSITE LAYOUT */}
        {children}
      </Box>
    </Box>
  );
};

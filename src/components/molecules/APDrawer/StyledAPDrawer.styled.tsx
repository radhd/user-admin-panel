import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { DRAWER_WIDTH } from "./constants";

export const StyledAPDrawerTemporary = styled(Drawer)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: DRAWER_WIDTH,
  },
}));

export const StyledAPDrawerPermanent = styled(Drawer)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: DRAWER_WIDTH,
  },
}));

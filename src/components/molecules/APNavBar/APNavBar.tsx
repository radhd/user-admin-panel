import type { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { IUserSettingsConfig, MobileButton, UserSettings } from "./components";
import { StyledAppBar } from "./StyledAPNavBar.styled";

interface IAPNavBar extends AppBarProps {
  handleDrawerToggle: () => void;
  userSettingsMenu?: IUserSettingsConfig[];
}

export const APNavBar = ({
  handleDrawerToggle,
  userSettingsMenu,
}: IAPNavBar) => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <MobileButton handleDrawerToggle={handleDrawerToggle} />
        <UserSettings userSettingsMenu={userSettingsMenu} />
      </Toolbar>
    </StyledAppBar>
  );
};

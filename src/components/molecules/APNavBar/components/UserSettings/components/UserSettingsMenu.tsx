import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { IUserSettingsConfig } from "../types/IUserSettingsConfig.types";
import { TAnchorElUser } from "../types/TAnchorElUser.types";

interface IUserSettingsMenu {
  handleCloseUserMenu: () => void;
  userSettingsMenu?: IUserSettingsConfig[];
  anchorElUser: TAnchorElUser;
}

export const UserSettingsMenu = ({
  userSettingsMenu,
  anchorElUser,
  handleCloseUserMenu,
}: IUserSettingsMenu) => {
  const userSettingsMenuItems = () => {
    if (userSettingsMenu) {
      return userSettingsMenu.map((setting, index) => (
        <MenuItem
          key={index}
          onClick={() => {
            handleCloseUserMenu();
            setting.action();
          }}
        >
          {setting.icon}
          <Typography textAlign="center" ml={1}>
            {setting.label}
          </Typography>
        </MenuItem>
      ));
    }
  };

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {userSettingsMenuItems()}
    </Menu>
  );
};

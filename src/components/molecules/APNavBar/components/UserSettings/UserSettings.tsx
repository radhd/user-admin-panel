import { useState } from "react";
import type { MouseEvent } from "react";
import { AvatarButton } from "./components/AvatarButton";
import { UserSettingsMenu } from "./components/UserSettingsMenu";
import { IUserSettingsConfig } from "./types/IUserSettingsConfig.types";
import { TAnchorElUser } from "./types/TAnchorElUser.types";

interface IUserSettings {
  userSettingsMenu?: IUserSettingsConfig[];
  avatarSrc?: string;
  avatarAlt?: string;
}

export const UserSettings = ({
  userSettingsMenu,
  avatarSrc,
  avatarAlt,
}: IUserSettings) => {
  const [anchorElUser, setAnchorElUser] = useState<TAnchorElUser>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AvatarButton
        handleOpenUserMenu={handleOpenUserMenu}
        avatarAlt={avatarAlt}
        avatarSrc={avatarSrc}
      />
      <UserSettingsMenu
        anchorElUser={anchorElUser}
        userSettingsMenu={userSettingsMenu}
        handleCloseUserMenu={handleCloseUserMenu}
      />
    </>
  );
};

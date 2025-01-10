import type { MouseEvent } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

interface IAvatarButton {
  handleOpenUserMenu: (event: MouseEvent<HTMLElement>) => void;
  avatarSrc?: string;
  avatarAlt?: string;
}

export const AvatarButton = ({
  handleOpenUserMenu,
  avatarAlt,
  avatarSrc,
}: IAvatarButton) => {
  return (
    <Box ml="auto">
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar alt={avatarAlt} src={avatarSrc} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

import { useEffect, useState, type MouseEvent } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { IUser } from "./IUser.types";

interface IAvatarButton {
  handleOpenUserMenu: (event: MouseEvent<HTMLElement>) => void;
}

export const AvatarButton = ({ handleOpenUserMenu }: IAvatarButton) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }
  return (
    <Box ml="auto">
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar alt={user.firstName} src={user.image} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

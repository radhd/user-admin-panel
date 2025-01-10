import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { NavigationMenu } from "../../organisms";
import Toolbar from "@mui/material/Toolbar";

interface IAuthorizedSpaceLayoutProps {
  children?: ReactNode;
  drawer?: ReactNode;
}

export const AuthorizedSpaceLayout = ({}: IAuthorizedSpaceLayoutProps) => {
  return (
    <Box display="flex">
      <NavigationMenu>
        {/* TODO: SITE LAYOUT WITH OUTLET AS CHILDREN*/}
        <Box component="main">
          <Toolbar />
          <Outlet />
        </Box>
      </NavigationMenu>
    </Box>
  );
};

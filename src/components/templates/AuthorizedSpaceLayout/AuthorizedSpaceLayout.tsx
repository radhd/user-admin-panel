import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

interface IAuthorizedSpaceLayoutProps {
  children?: ReactNode;
  drawer?: ReactNode;
}

export const AuthorizedSpaceLayout = ({
  children,
  drawer,
}: IAuthorizedSpaceLayoutProps) => {
  return (
    <Box display="flex">
      {drawer}
      <Outlet />
      {children}
    </Box>
  );
};

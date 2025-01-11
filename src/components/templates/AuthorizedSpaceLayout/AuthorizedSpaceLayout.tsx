import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { NavigationMenu } from "../../organisms";
import { MainContainerLayout } from "./components/MainContainerLayout";

interface IAuthorizedSpaceLayoutProps {
  children?: ReactNode;
  drawer?: ReactNode;
}

export const AuthorizedSpaceLayout = ({}: IAuthorizedSpaceLayoutProps) => {
  return (
    <NavigationMenu>
      <MainContainerLayout>
        <Outlet />
      </MainContainerLayout>
    </NavigationMenu>
  );
};

import type { ReactNode } from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

interface IMainContainerLayout {
  children: ReactNode;
}

export const MainContainerLayout = ({ children }: IMainContainerLayout) => {
  return (
    <>
      <Container component="main">
        <Toolbar />
        {children}
      </Container>
    </>
  );
};

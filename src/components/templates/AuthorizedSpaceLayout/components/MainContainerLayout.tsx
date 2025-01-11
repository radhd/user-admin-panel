import type { ReactNode } from "react";
import { StyledBox } from "./StyledMainContainerLayout";

interface IMainContainerLayout {
  children: ReactNode;
}

export const MainContainerLayout = ({ children }: IMainContainerLayout) => {
  return (
    <>
      <StyledBox component="main">{children}</StyledBox>
    </>
  );
};

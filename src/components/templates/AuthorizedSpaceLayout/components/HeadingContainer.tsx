import { Stack } from "@mui/material";
import { ReactNode } from "react";

interface IHeadingContainer {
  children?: ReactNode;
}

export const HeadingContainer = ({ children }: IHeadingContainer) => {
  return <Stack pb={5}>{children}</Stack>;
};

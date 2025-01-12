
import { StyledAPFab } from "./StyledAPFab.styled";
import type { FabProps } from "@mui/material";

interface IAPFab extends FabProps {}

export const APFab = ({ children, ...props }: IAPFab) => {
  return (
    <StyledAPFab color="primary" aria-label="add" {...props}>
      {children}
    </StyledAPFab>
  );
};

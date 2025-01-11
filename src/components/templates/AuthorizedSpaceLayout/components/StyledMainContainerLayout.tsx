import { DRAWER_WIDTH } from "@/components/molecules";
import Box, { type BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
interface StyledBoxProps extends BoxProps {
  component?: React.ElementType;
}

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme }) => ({
  padding: `48px 16px 24px ${DRAWER_WIDTH / 2 + 16}px`,
  maxWidth: "100%",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "16px",
  },
}));

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";

// TO AVOID TABLE HEADING INCONSISTENCY
const TABLE_MIN_WIDTH = 800;

export const StyledTable = styled(Table)(() => ({
  minWidth: TABLE_MIN_WIDTH,
}));

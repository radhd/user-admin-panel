import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { APTableHead } from "./components/APTableHead/APTableHead";
import { APTableBody } from "./components/APTableBody/APTableBody";
import type { IAPTableBody } from "./IAPTable.types";
import { StyledTable } from "./StyledAPTableHead.styled";

export const APTable = ({ columns, rows }: IAPTableBody) => {
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="users table">
        <APTableHead columns={columns} />
        <APTableBody rows={rows} columns={columns} />
      </StyledTable>
    </TableContainer>
  );
};

import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IColumnConfiguration } from "../../IAPTable.types";
import { ITransformedUserResponse } from "@/services/users/types";

interface IAPTableHead {
  columns: IColumnConfiguration<ITransformedUserResponse>[];
}

export const APTableHead = ({ columns }: IAPTableHead) => {
  return (
    <TableHead>
      <TableRow>
        {columns &&
          columns.map((column) => (
            <TableCell key={column.id}>{column.header}</TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
};

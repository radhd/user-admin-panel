import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import type { IAPTableBody } from "../../IAPTable.types";

export const APTableBody = ({ rows, columns }: IAPTableBody) => {
  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          {columns.map((column) => (
            <TableCell key={column.id}>
              {column.component
                ? typeof column.component === "function"
                  ? column.component({ children: row[column.id] })
                  : column.component
                : row[column.id]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

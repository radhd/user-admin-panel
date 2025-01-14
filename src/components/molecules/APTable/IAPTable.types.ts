import type { ReactNode } from "react";
import type { ITransformedUserResponse } from "@/services/users/types";

export interface IColumnConfiguration<T extends object> {
  id: keyof T;
  header: string;
  component?: ReactNode | ((props: { rowData: T }) => ReactNode);
}

export interface IAPTableBody {
  columns: IColumnConfiguration<ITransformedUserResponse>[];
  rows: ITransformedUserResponse[];
}

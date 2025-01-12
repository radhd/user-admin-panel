import type { ITransformedUserResponse } from "@/services/users/types";

export interface IColumnConfiguration<T extends object> {
  id: keyof T;
  header: string;
  component?:
    | React.ReactNode
    | ((props: { children: React.ReactNode }) => JSX.Element);
}

export interface IAPTableBody {
  columns: IColumnConfiguration<ITransformedUserResponse>[];
  rows: ITransformedUserResponse[];
}

export interface IRow {
  id: any;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  role: string;
}

export interface IRowForForm {
  row: IRow;
}

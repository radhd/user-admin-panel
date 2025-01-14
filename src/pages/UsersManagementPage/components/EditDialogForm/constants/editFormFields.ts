import { IRow } from "../types";

export const EDIT_FORM_FIELDS = [
  {
    name: "firstName" as keyof IRow,
    type: "text",
    label: "First Name",
  },
  {
    name: "lastName" as keyof IRow,
    type: "text",
    label: "Last Name",
  },
  {
    name: "email" as keyof IRow,
    type: "email",
    label: "Email",
  },
  {
    name: "age" as keyof IRow,
    type: "number",
    label: "Age",
  },
  {
    name: "role" as keyof IRow,
    type: "text",
    label: "Role",
  },
];

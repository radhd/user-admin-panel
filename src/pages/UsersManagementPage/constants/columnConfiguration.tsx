import { IColumnConfiguration } from "@/components/molecules/APTable/IAPTable.types";
import { ITransformedUserResponse } from "@/services/users/types";
import Button from "@mui/material/Button";

export const columns: IColumnConfiguration<ITransformedUserResponse>[] = [
  {
    id: "firstName",
    header: "First Name",
  },
  {
    id: "lastName",
    header: "Last Name",
  },
  {
    id: "email",
    header: "Email Address",
  },
  {
    id: "age",
    header: "Age",
  },
  {
    id: "role",
    header: "Role",
  },
  {
    id: "edit" as keyof ITransformedUserResponse,
    header: "Edit",
    component: <Button variant="text">edit</Button>,
  },
];

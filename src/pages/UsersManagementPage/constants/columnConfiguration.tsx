import { IColumnConfiguration } from "@/components/molecules/APTable/IAPTable.types";
import { ITransformedUserResponse } from "@/services/users/types";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

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
    component: (
      <IconButton edge="start">
        <EditIcon fontSize="small" />
      </IconButton>
    ),
  },
];

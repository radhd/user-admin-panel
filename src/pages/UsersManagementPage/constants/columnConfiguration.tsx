import { IColumnConfiguration } from "@/components/molecules/APTable/IAPTable.types";
import { ITransformedUserResponse } from "@/services/users/types";
import { EditDialogForm } from "../components/EditDialogForm/EditDialogForm";
import { DeleteAlertUser } from "../components/DeleteAlertUser/DeleteAlertUser";

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
    header: "Edit/Remove",
    component: ({ rowData }: { rowData: ITransformedUserResponse }) => {
      const sanitizedRowData = {
        ...rowData,
        age: String(rowData.age),
      };

      return (
        <>
          <EditDialogForm row={sanitizedRowData} />
          <DeleteAlertUser />
        </>
      );
    },
  },
];

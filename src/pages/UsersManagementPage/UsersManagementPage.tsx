import { APTable } from "@/components/molecules";
import { useGetAllUsersQuery } from "@/services";
import { columns } from "./constants/columnConfiguration";
import { AddDialogForm } from "./components/AddDialogUserForm/AddDialogForm";
import { useSelector } from "react-redux";
import { RootState } from "@/services/setupStore";

export const UsersManagementPage = () => {
  const { isLoading, error } = useGetAllUsersQuery({});

  const users = useSelector((state: RootState) => state.users.users);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users!</p>;

  return (
    <>
      <AddDialogForm />
      <APTable columns={columns} rows={users} />
    </>
  );
};

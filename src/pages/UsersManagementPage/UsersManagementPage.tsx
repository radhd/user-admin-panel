import { APTable } from "@/components/molecules";
import { useGetAllUsersQuery } from "@/services";
import { columns } from "./constants/columnConfiguration";
import { AddDialogForm } from "./components/AddDialogUserForm/AddDialogForm";

export const UsersManagementPage = () => {
  const { data: users, isLoading, error } = useGetAllUsersQuery({});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users!</p>;

  return (
    <>
      <AddDialogForm />
      <APTable columns={columns} rows={users?.transformed ?? []} />
    </>
  );
};

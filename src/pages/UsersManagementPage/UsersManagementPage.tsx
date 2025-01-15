import { APTable } from "@/components/molecules";
import { useGetAllUsersQuery } from "@/services";
import { columns } from "./constants/columnConfiguration";
import { AddDialogForm } from "./components/AddDialogUserForm/AddDialogForm";
import { useSelector } from "react-redux";
import { RootState } from "@/services/setupStore";
import { HeadingContainer } from "@/components/templates";
import Typography from "@mui/material/Typography";
import { APCircularProgress } from "@/components/atoms";

export const UsersManagementPage = () => {
  const { isLoading, error } = useGetAllUsersQuery({});

  const users = useSelector((state: RootState) => state.users.users);

  if (isLoading) return <APCircularProgress />;
  if (error) return <p>Error loading users!</p>;

  return (
    <>
      <HeadingContainer>
        <Typography variant="h2">User Management Table</Typography>
      </HeadingContainer>
      <AddDialogForm />
      <APTable columns={columns} rows={users} />
    </>
  );
};

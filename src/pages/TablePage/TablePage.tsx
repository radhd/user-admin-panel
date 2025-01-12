import { APTable } from "@/components/molecules";
import { useGetAllUsersQuery } from "@/services";

const columns = [
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
    header: "Email",
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
    id: "edit",
    header: "Edit",
  },
];

export const TablePage = () => {
  const { data: users, isLoading, error } = useGetAllUsersQuery({});

  console.log(users?.raw);
  console.log("transformed", users?.transformed);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users!</p>;

  return <APTable columns={columns} />;
};

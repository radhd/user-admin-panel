import { useGetCurrentUserQuery } from "../../../services/auth/authApi";

export const UserProfile = () => {
  const { data: user, isLoading, error } = useGetCurrentUserQuery({});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching user profile data</p>;

  return (
    <div>
      <h1>
        Welcome, {user.firstName} {user.lastName}
      </h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

import Box from "@mui/material/Box";
import { useGetCurrentUserQuery } from "../../../services/auth/authApi";
import Typography from "@mui/material/Typography";
import { APCircularProgress } from "@/components/atoms";

export const UserProfile = () => {
  const { data: user, isLoading, error } = useGetCurrentUserQuery({});

  if (isLoading) return <APCircularProgress />;
  if (error) return <p>Error fetching user profile data</p>;

  return (
    <Box>
      <Typography variant="h3">
        Welcome, {user.firstName} {user.lastName}
      </Typography>
      <Typography variant="body1">Email: {user.email}</Typography>
    </Box>
  );
};

import { HeadingContainer } from "@/components/templates";
import { UserProfile } from "./components/UserProfile";
import Typography from "@mui/material/Typography";

export const DashboardPage = () => {
  return (
    <>
      <HeadingContainer>
        <Typography variant="h2">Dashboard Page</Typography>
      </HeadingContainer>
      <UserProfile />
    </>
  );
};

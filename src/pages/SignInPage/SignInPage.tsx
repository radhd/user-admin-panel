import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { schema } from "./login.schema";
import type { IFormData } from "./types";
import { useDispatch } from "react-redux";
import { APControlledInput, useAPControlledInput } from "@/components/atoms";
import { NAVIGATION_PATH } from "@/components/organisms/NavigationMenu";
import { logout, setCredentials, useLoginUserMutation } from "@/services/auth";
import { StyledSignInPaper } from "./StyledSignInPage.styled";

export const SignInPage = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit, errors } = useAPControlledInput(schema, {
    username: "",
    password: "",
  });

  const onSubmit = async (data: IFormData) => {
    try {
      const { username, password } = data;
      const response = await loginUser({ username, password }).unwrap();
      dispatch(setCredentials(response));
      navigate(NAVIGATION_PATH.dashboard);
    } catch (error) {
      console.error(error);
      dispatch(logout());
    }
  };

  return (
    <>
      <Container maxWidth="xs">
        <StyledSignInPaper elevation={3}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2}>
              <Typography variant="h5">Sign in</Typography>
              <APControlledInput
                control={control}
                name="username"
                placeholder="Username"
                type="email"
                error={!!errors.username}
                helperText={errors.username?.message}
              />
              <APControlledInput
                control={control}
                name="password"
                placeholder="Password"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <Button type="submit" variant="contained" disabled={isLoading}>
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </Stack>
          </Box>
        </StyledSignInPaper>
      </Container>
    </>
  );
};

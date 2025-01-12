import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { schema } from "./login.schema";
import { StyledSignInPaper } from "./StyledSignInPage.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import type { IFormData } from "./types";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../services/auth/authApi";
import { logout, setCredentials } from "../../services/auth/authState";
import { NAVIGATION_PATH } from "@/components/organisms/NavigationMenu/constants/navigationPath";

export const SignInPage = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
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
              <Controller
                control={control}
                name="username"
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder="Username"
                    type="email"
                    error={!!errors.username}
                    helperText={errors.username?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder="Password"
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
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

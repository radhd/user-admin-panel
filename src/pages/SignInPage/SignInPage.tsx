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
import { useCheckAuthMutation } from "../../services/auth/authApi";
import { yupResolver } from "@hookform/resolvers/yup";
import type { IFormData } from "./types";

export const SignInPage = () => {
  const [checkAuth, { isLoading }] = useCheckAuthMutation();
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
    await checkAuth(data);
    navigate("/dashboard");
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
                    placeholder="example@example.com"
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

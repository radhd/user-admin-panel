import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { schema } from "./login.schema";
import { StyledSignInPaper } from "./StyledSignInPage.styled";

interface IFormData {
  username: string;
  password: string;
}

export const SignInPage = () => {
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

  const onSubmit = (_data: IFormData) => {};

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
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Stack>
          </Box>
        </StyledSignInPaper>
      </Container>
    </>
  );
};

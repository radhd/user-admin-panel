import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required"),
  password: yup
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

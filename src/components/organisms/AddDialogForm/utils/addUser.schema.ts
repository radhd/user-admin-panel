import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  age: yup
    .number()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .min(18, "You must be at least 18 years old")
    .required("Age is required"),
  role: yup
    .mixed()
    .oneOf(["admin", "user", "manager"], "Invalid role")
    .required("Role is required"),
});

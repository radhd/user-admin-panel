import * as yup from "yup";

export const userEditSchema = yup.object({
  firstName: yup.string().min(1, "First name is required"),
  lastName: yup.string().min(1, "Last name is required"),
  email: yup.string().email("Invalid email address"),
  age: yup.number().min(0, "Age must be positive").max(150, "Invalid age"),
  role: yup.string().min(1, "Role is required"),
});

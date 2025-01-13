export const FORM_FIELDS = [
  {
    name: "firstName" as const,
    placeholder: "First name",
    type: "text",
    label: "First Name",
  },
  {
    name: "lastName" as const,
    placeholder: "Last name",
    type: "text",
    label: "Last Name",
  },
  {
    name: "email" as const,
    placeholder: "example@example.com",
    type: "email",
    label: "Email",
  },
  {
    name: "age" as const,
    placeholder: "User age",
    type: "number",
    label: "Age",
  },
] as const;

import { APControlledInput } from "@/components/atoms";
import { FORM_FIELDS } from "@/components/organisms/AddDialogForm/components/constants/formFields";
import { USER_ROLES } from "@/components/organisms/AddDialogForm/constants/userRoles";
import { TFormData } from "@/components/organisms/AddDialogForm/TFormData.types";
import { capitalizeString } from "@/utils";
import MenuItem from "@mui/material/MenuItem";
import { Control, FieldErrors } from "react-hook-form";

interface IAddDialogUserForm {
  control: Control<TFormData>;
  errors: FieldErrors<TFormData>;
}

export const AddDialogUserForm = ({ control, errors }: IAddDialogUserForm) => {
  return (
    <>
      {FORM_FIELDS.map((field) => (
        <APControlledInput
          key={field.name}
          control={control}
          name={field.name}
          id={`user-form-${field.name}`}
          type={field.type}
          label={field.label}
          variant="standard"
          margin="dense"
          fullWidth
          error={!!errors[field.name]}
          helperText={errors[field.name]?.message}
          slotProps={{
            htmlInput: {
              "aria-label": field.label,
            },
          }}
        />
      ))}

      <APControlledInput
        control={control}
        defaultValue="User"
        fullWidth
        name="role"
        id="user-form-role"
        variant="standard"
        margin="dense"
        select
        label="Select Role"
        error={!!errors.role}
        helperText={errors.role?.message}
        slotProps={{
          htmlInput: {
            "aria-label": "Select Role",
          },
        }}
      >
        {USER_ROLES.map((role) => (
          <MenuItem key={role.value} value={role.value}>
            {capitalizeString(role.value)}
          </MenuItem>
        ))}
      </APControlledInput>
    </>
  );
};

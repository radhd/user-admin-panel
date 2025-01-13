import { APControlledInput } from "@/components/atoms";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import type { TFormData } from "../TFormData.types";
import type {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import { FORM_FIELDS } from "./constants/formFields";
import { DialogFormActions } from "./DialogFormActions";
import { USER_ROLES } from "../constants/userRoles";
import MenuItem from "@mui/material/MenuItem";
import { capitalizeString } from "@/utils";

interface IDialogForm {
  handleSubmit: UseFormHandleSubmit<TFormData>;
  onSubmit: (data: TFormData) => Promise<void>;
  control: Control<TFormData>;
  errors: FieldErrors<TFormData>;
  handleClose: () => void;
  isLoading: boolean;
}

export const DialogForm = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  handleClose,
  isLoading,
}: IDialogForm) => {
  return (
    <Box
      component="form"
      id="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add user please fill all the required fields.
        </DialogContentText>

        {FORM_FIELDS.map((field) => (
          <APControlledInput
            key={field.name}
            autoFocus
            control={control}
            name={field.name}
            id={`user-form-${field.name}`}
            placeholder={field.placeholder}
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
          autoFocus
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
      </DialogContent>

      <DialogFormActions handleClose={handleClose} isLoading={isLoading} />
    </Box>
  );
};

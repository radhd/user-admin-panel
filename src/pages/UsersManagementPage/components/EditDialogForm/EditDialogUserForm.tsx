import { APControlledInput } from "@/components/atoms";
import type { Control, FieldErrors } from "react-hook-form";
import type { IRow } from "./types";
import { EDIT_FORM_FIELDS } from "./constants/editFormFields";

interface IAddDialogUserForm {
  control: Control<IRow>;
  errors: FieldErrors<IRow>;
}

export const EditDialogUserForm = ({ control, errors }: IAddDialogUserForm) => {
  return (
    <>
      {EDIT_FORM_FIELDS.map((field) => (
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
    </>
  );
};

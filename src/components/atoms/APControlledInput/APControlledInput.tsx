import type { TextFieldProps } from "@mui/material/TextField";
import TextField from "@mui/material/TextField";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";

type TAPControlledInput<T extends FieldValues> = TextFieldProps & {
  control: Control<T>;
  name: Path<T>;
};

export const APControlledInput = <T extends FieldValues>({
  control,
  name,
  ...props
}: TAPControlledInput<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

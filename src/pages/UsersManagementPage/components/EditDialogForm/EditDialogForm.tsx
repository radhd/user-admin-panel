import type { SyntheticEvent } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useAPControlledInput, useAPDialog } from "@/components/atoms";
import { APDialogForm } from "@/components/organisms";
import { EditDialogUserForm } from "./EditDialogUserForm";
import { userEditSchema } from "./userEditSchema.schema";
import type { IRow } from "./types";

export interface IEditDialogForm {
  row: IRow;
}

export const EditDialogForm = ({ row }: IEditDialogForm) => {
  const { open, handleClickOpen, handleClose } = useAPDialog();

  const defaultFormValues = { ...row, age: row.age.toString() };

  const { control, handleSubmit, errors, reset } = useAPControlledInput(
    userEditSchema,
    defaultFormValues
  );

  const handleSnackbarClose = (
    _event?: SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
  };

  const onSubmit = async (data: IRow) => {
    console.log(data);
    reset(defaultFormValues);
  };

  const formOpener = (
    <IconButton onClick={handleClickOpen} edge="start">
      <EditIcon fontSize="small" />
    </IconButton>
  );

  return (
    <APDialogForm
      id="edit-user-form"
      open={open}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
      errors={errors}
      isLoading={false}
      isSuccess={false}
      handleSnackbarClose={handleSnackbarClose}
      dialogTitle="Edit user"
      dialogContentText="To edit user please change required fields"
      textCreationAlert="User Updated Successfully!"
      formOpener={formOpener}
    >
      <EditDialogUserForm control={control} errors={errors} />
    </APDialogForm>
  );
};

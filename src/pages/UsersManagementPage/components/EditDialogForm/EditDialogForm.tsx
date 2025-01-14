import type { SyntheticEvent } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useAPControlledInput, useAPDialog } from "@/components/atoms";
import { APDialogForm } from "@/components/organisms";
import { EditDialogUserForm } from "./EditDialogUserForm";
import { userEditSchema } from "./userEditSchema.schema";
import type { IRow } from "./types";
import { useUpdateUserMutation } from "@/services/users/usersApi";

export interface IEditDialogForm {
  row: IRow;
}

export const EditDialogForm = ({ row }: IEditDialogForm) => {
  const { open, handleClickOpen, handleClose } = useAPDialog();
  const [updateUser, { isLoading, isSuccess, reset: resetMutation }] =
    useUpdateUserMutation();

  const defaultFormValues = { ...row, age: row.age.toString() };

  const { control, handleSubmit, errors } = useAPControlledInput(
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
    resetMutation();
  };

  const onSubmit = async (data: IRow) => {
    try {
      await updateUser({ ...data, id: row.id }).unwrap();
      handleClose();
    } catch (error) {
      console.log(error);
    }
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
      isLoading={isLoading}
      isSuccess={isSuccess}
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

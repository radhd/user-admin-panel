import { useAPDialog, useAPControlledInput } from "@/components/atoms";
import { useUpdateUserMutation } from "@/services/users/usersApi";
import { SyntheticEvent } from "react";
import type { IRow, IRowForForm } from "../../../types/types";
import { userEditSchema } from "../userEditSchema.schema";

export const useEditDialogForm = ({ row }: IRowForForm) => {
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
  return {
    handleClickOpen,
    open,
    handleClose,
    handleSubmit,
    onSubmit,
    control,
    errors,
    isLoading,
    isSuccess,
    handleSnackbarClose,
  };
};

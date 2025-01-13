import { useState } from "react";
import { USER_ADD_FORM_DEFAULT_VALUES } from "../constants/userDefaultFormValues";
import { schema } from "../utils";
import { useAPControlledInput } from "@/components/atoms";
import { useAddUserMutation } from "@/services";
import { TFormData } from "../TFormData.types";

export const useDialogForm = () => {
  const [open, setOpen] = useState(false);
  const [addUser, { isLoading, isSuccess, reset: resetMutation }] =
    useAddUserMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    resetMutation();
  };

  const { control, handleSubmit, errors, reset } = useAPControlledInput(
    schema,
    USER_ADD_FORM_DEFAULT_VALUES
  );

  const onSubmit = async (data: TFormData) => {
    try {
      const { firstName, lastName, email, age: stringAge, role } = data;
      const age = Number(stringAge);
      await addUser({ firstName, lastName, email, age, role }).unwrap();
      reset(USER_ADD_FORM_DEFAULT_VALUES);
      handleClose();
    } catch (error) {
      console.error("Unable to add user", error);
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

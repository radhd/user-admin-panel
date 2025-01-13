import { useState } from "react";
import { USER_ADD_FORM_DEFAULT_VALUES } from "../constants/userDefaultFormValues";
import { schema } from "../utils";
import { useAPControlledInput } from "@/components/atoms";

export const useDialogForm = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { control, handleSubmit, errors, reset } = useAPControlledInput(
    schema,
    USER_ADD_FORM_DEFAULT_VALUES
  );

  const onSubmit = (data: typeof USER_ADD_FORM_DEFAULT_VALUES) => {
    console.log(data);
    reset(USER_ADD_FORM_DEFAULT_VALUES);
    handleClose();
  };
  return {
    handleClickOpen,
    open,
    handleClose,
    handleSubmit,
    onSubmit,
    control,
    errors,
  };
};

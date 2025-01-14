import { USER_ADD_FORM_DEFAULT_VALUES } from "../../../../../components/organisms/AddDialogForm/constants/userDefaultFormValues";
import { schema } from "../../../../../components/organisms/AddDialogForm/utils";
import { useAPControlledInput, useAPDialog } from "@/components/atoms";
import { useAddUserMutation } from "@/services";
import { TFormData } from "../../../../../components/organisms/AddDialogForm/TFormData.types";

export const useDialogForm = () => {
  const [addUser, { isLoading, isSuccess, reset: resetMutation }] =
    useAddUserMutation();
  const { open, handleClickOpen, handleClose } = useAPDialog();

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
    reset,
    handleSnackbarClose,
  };
};

import { USER_ADD_FORM_DEFAULT_VALUES } from "../../../../../components/organisms/AddDialogForm/constants/userDefaultFormValues";
import { schema } from "../../../../../components/organisms/AddDialogForm/utils";
import { useAPControlledInput, useAPDialog } from "@/components/atoms";
import { setUsers, TUserRole, useAddUserMutation } from "@/services";
import { TFormData } from "../../../../../components/organisms/AddDialogForm/TFormData.types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/setupStore";
import { ITransformedUserResponse } from "@/services/users/types";

export const useDialogForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
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
      const newUser = await addUser({
        firstName,
        lastName,
        email,
        age,
        role,
      }).unwrap();

      const transformedUser: ITransformedUserResponse = {
        ...newUser,
        role: role as TUserRole,
      };

      dispatch(setUsers([...users, transformedUser]));
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

import AddIcon from "@mui/icons-material/Add";
import { APFab } from "@/components/atoms";
import { APDialogForm, useDialogForm } from "@/components/organisms";
import { AddDialogUserForm } from "./AddDialogUserForm";

export const AddDialogForm = () => {
  const {
    handleClickOpen,
    open,
    handleClose,
    handleSubmit,
    onSubmit,
    control,
    errors,
    isLoading: isUserLoading,
    isSuccess,
    handleSnackbarClose,
  } = useDialogForm();

  const formOpener = (
    <APFab onClick={handleClickOpen} aria-hidden={false}>
      <AddIcon fontSize="small" />
    </APFab>
  );

  return (
    <APDialogForm
      id="add-user-form"
      open={open}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
      errors={errors}
      isLoading={isUserLoading}
      isSuccess={isSuccess}
      handleSnackbarClose={handleSnackbarClose}
      dialogTitle="Add user"
      dialogContentText="To add user please fill all the required fields."
      textCreationAlert="User Created Successfully!"
      formOpener={formOpener}
    >
      <AddDialogUserForm control={control} errors={errors} />
    </APDialogForm>
  );
};

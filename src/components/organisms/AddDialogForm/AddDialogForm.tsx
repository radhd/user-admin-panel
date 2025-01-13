import Dialog from "@mui/material/Dialog";
import { APFab } from "@/components/atoms";
import AddIcon from "@mui/icons-material/Add";
import { useDialogForm } from "./hooks/useDialogForm";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { DialogForm } from "./components/DialogForm";

export const AddDialogForm = () => {
  const {
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
  } = useDialogForm();

  return (
    <>
      <APFab onClick={handleClickOpen} aria-hidden={false}>
        <AddIcon fontSize="small" />
      </APFab>

      <Dialog open={open} onClose={handleClose}>
        <DialogForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          errors={errors}
          handleClose={handleClose}
          isLoading={isLoading}
        />
      </Dialog>
      <Snackbar
        open={isSuccess}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          User Created Successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

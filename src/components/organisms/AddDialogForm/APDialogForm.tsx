import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { DialogForm } from "./components/DialogForm";
import type {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import type { ReactNode, SyntheticEvent } from "react";
import { APDialog } from "@/components/atoms";

interface IAPDialogForm<T extends Record<string, string>> {
  open: boolean;
  formOpener: ReactNode;
  handleClose: () => void;
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmit: (data: T) => Promise<void>;
  control: Control<T>;
  handleSnackbarClose: (
    _event?: SyntheticEvent | Event,
    reason?: string
  ) => void;
  dialogTitle: string;
  dialogContentText: string;
  errors: FieldErrors<T>;
  isLoading: boolean;
  isSuccess: boolean;
  textCreationAlert: string;
  children: ReactNode;
  id: string;
}

export const APDialogForm = <T extends Record<string, string>>({
  formOpener,
  children,
  open,
  handleClose,
  handleSubmit,
  onSubmit,
  control,
  errors,
  isLoading,
  isSuccess,
  handleSnackbarClose,
  id,
  dialogTitle,
  dialogContentText,
  textCreationAlert,
}: IAPDialogForm<T>) => {
  return (
    <>
      {formOpener}
      <APDialog open={open} onClose={handleClose}>
        <DialogForm
          id={id}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          errors={errors}
          handleClose={handleClose}
          isLoading={isLoading}
          dialogTitle={dialogTitle}
          dialogContentText={dialogContentText}
        >
          {children}
        </DialogForm>
      </APDialog>
      <Snackbar
        open={isSuccess}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          {textCreationAlert}
        </Alert>
      </Snackbar>
    </>
  );
};

import { ReactNode } from "react";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import type {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import { DialogFormActions } from "./DialogFormActions";

interface IDialogForm<T extends Record<string, string>> {
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmit: (data: T) => Promise<void>;
  control: Control<T>;
  errors: FieldErrors<T>;
  handleClose: () => void;
  isLoading: boolean;
  children: ReactNode;
  dialogTitle: string;
  dialogContentText: string;
  id: string;
}

export const DialogForm = <T extends Record<string, string>>({
  handleSubmit,
  onSubmit,
  handleClose,
  isLoading,
  dialogTitle,
  dialogContentText,
  id,
  children,
}: IDialogForm<T>) => {
  return (
    <Box component="form" id={id} onSubmit={handleSubmit(onSubmit)} noValidate>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogContentText}</DialogContentText>
        {children}
      </DialogContent>
      <DialogFormActions handleClose={handleClose} isLoading={isLoading} />
    </Box>
  );
};

import type { SyntheticEvent } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

interface IAPSnackbar {
  isLoading: boolean;
  handleSnackbarClose: (
    _event?: SyntheticEvent | Event,
    reason?: string
  ) => void;
  textCreationAlert: string;
}

export const APSnackbar = ({
  isLoading,
  handleSnackbarClose,
  textCreationAlert,
}: IAPSnackbar) => {
  return (
    <Snackbar
      open={isLoading}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
    >
      <Alert onClose={handleSnackbarClose} severity="success">
        {textCreationAlert}
      </Alert>
    </Snackbar>
  );
};

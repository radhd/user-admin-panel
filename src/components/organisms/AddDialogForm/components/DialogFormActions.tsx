import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import DialogActions from "@mui/material/DialogActions";

interface IDialogFormActions {
  handleClose: () => void;
  isLoading: boolean;
}

export const DialogFormActions = ({
  handleClose,
  isLoading,
}: IDialogFormActions) => {
  return (
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button type="submit">Add user</Button>
      <Backdrop open={isLoading} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </DialogActions>
  );
};

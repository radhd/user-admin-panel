import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import type { IRowForForm } from "../../types/types";
import { APDialog, APSnackbar } from "@/components/atoms";
import { useDeleteUser } from "./hooks/useDeleteUser";

export const DeleteAlertUser = ({ row }: IRowForForm) => {
  const {
    handleClickOpen,
    handleClose,
    open,
    fullScreen,
    handleDelete,
    isLoading,
    isSuccess,
    handleSnackbarClose,
  } = useDeleteUser({ row });

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <APDialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are You Sure You Want to Delete This User?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This action will permanently delete {row.firstName} {row.lastName}{" "}
            and their data. Are you sure you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </APDialog>
      <APSnackbar
        isLoading={isSuccess}
        handleSnackbarClose={handleSnackbarClose}
        textCreationAlert={`User is deleted`}
      />
    </>
  );
};

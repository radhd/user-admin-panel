import { useAPDialog } from "@/components/atoms";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useDeleteUserMutation } from "@/services/users/usersApi";
import type { SyntheticEvent } from "react";
import type { IRowForForm } from "@/pages/UsersManagementPage/types/types";

export const useDeleteUser = ({ row }: IRowForForm) => {
  const { handleClickOpen, handleClose, open } = useAPDialog();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const [deleteUser, { isLoading, isSuccess }] = useDeleteUserMutation();

  const handleSnackbarClose = (
    _event?: SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
  };

  const handleDelete = async () => {
    await deleteUser(row.id).unwrap();
    handleClose();
  };

  return {
    handleClickOpen,
    handleClose,
    open,
    fullScreen,
    handleDelete,
    isLoading,
    isSuccess,
    handleSnackbarClose,
  };
};

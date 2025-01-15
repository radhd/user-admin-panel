import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { APDialogForm } from "@/components/organisms";
import { EditDialogUserForm } from "./EditDialogUserForm";
import type { IRowForForm } from "../../types/types";
import { useEditDialogForm } from "./hooks/useEditDialogForm";

export const EditDialogForm = ({ row }: IRowForForm) => {
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
  } = useEditDialogForm({ row });

  const formOpener = (
    <IconButton onClick={handleClickOpen} edge="start">
      <EditIcon fontSize="small" />
    </IconButton>
  );

  return (
    <APDialogForm
      id="edit-user-form"
      open={open}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
      errors={errors}
      isLoading={isLoading}
      isSuccess={isSuccess}
      handleSnackbarClose={handleSnackbarClose}
      dialogTitle="Edit user"
      dialogContentText="To edit user please change required fields"
      textCreationAlert="User Updated Successfully!"
      formOpener={formOpener}
    >
      <EditDialogUserForm control={control} errors={errors} />
    </APDialogForm>
  );
};

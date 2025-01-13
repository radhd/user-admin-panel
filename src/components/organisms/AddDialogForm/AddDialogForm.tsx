import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { APControlledInput, APFab } from "@/components/atoms";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import { USER_ROLES } from "./constants/userRoles";
import { capitalizeString } from "@/utils";
import { useDialogForm } from "./hooks/useDialogForm";

export const AddDialogForm = () => {
  const {
    handleClickOpen,
    open,
    handleClose,
    handleSubmit,
    onSubmit,
    control,
    errors,
  } = useDialogForm();

  return (
    <>
      <APFab onClick={handleClickOpen}>
        <AddIcon fontSize="small" />
      </APFab>

      <Dialog open={open} onClose={handleClose}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <DialogTitle>Add User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add user please fill all the required fields.
            </DialogContentText>
            <APControlledInput
              autoFocus
              control={control}
              name="firstName"
              placeholder="First name"
              type="text"
              variant="standard"
              margin="dense"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <APControlledInput
              autoFocus
              control={control}
              name="lastName"
              placeholder="Last name"
              type="text"
              variant="standard"
              margin="dense"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <APControlledInput
              autoFocus
              control={control}
              name="email"
              placeholder="example@example.com"
              type="email"
              variant="standard"
              margin="dense"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <APControlledInput
              autoFocus
              control={control}
              name="age"
              placeholder="User age"
              type="number"
              variant="standard"
              margin="dense"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <APControlledInput
              autoFocus
              control={control}
              defaultValue="User"
              fullWidth
              name="role"
              variant="standard"
              margin="dense"
              select
              label="Select Role"
              children={USER_ROLES.map((role) => (
                <MenuItem key={role.value} value={role.value}>
                  {capitalizeString(role.value)}
                </MenuItem>
              ))}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add user</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

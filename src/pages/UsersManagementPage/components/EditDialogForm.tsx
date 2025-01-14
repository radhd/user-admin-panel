import { useAPDialog } from "@/components/atoms";
import { APDialog } from "@/components/atoms/APDialog/APDialog";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
interface EditDialogFormProps {
  row: {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    role: string;
  };
}

export const EditDialogForm = ({ row }: EditDialogFormProps) => {
  const { open, handleClickOpen, handleClose } = useAPDialog();

  return (
    <>
      <IconButton edge="start" onClick={handleClickOpen}>
        <EditIcon fontSize="small" />
      </IconButton>
      <APDialog open={open} onClose={handleClose}>
        <div>EditDialogForm</div>
        <h3>Edit User</h3>
        <p>First Name: {row.firstName}</p>
        <p>Last Name: {row.lastName}</p>
        <p>Email: {row?.email}</p>
        <p>Age: {row?.age}</p>
        <p>Role: {row?.role}</p>
      </APDialog>
    </>
  );
};

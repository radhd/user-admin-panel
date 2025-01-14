import Dialog, { type DialogProps } from "@mui/material/Dialog";

interface IAPDialog extends DialogProps {}

export const APDialog = ({ children, ...props }: IAPDialog) => {
  return (
    <>
      <Dialog {...props}>{children}</Dialog>
    </>
  );
};

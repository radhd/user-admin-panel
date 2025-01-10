import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface IMobileButton {
  handleDrawerToggle: () => void;
}

export const MobileButton = ({ handleDrawerToggle }: IMobileButton) => {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: { sm: "none" } }}
    >
      <MenuIcon />
    </IconButton>
  );
};

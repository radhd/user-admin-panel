import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import type { IDrawerBodyItems } from "./DrawerBodyItems.types";

interface IDrawerBody {
  items?: IDrawerBodyItems[];
}

export const DrawerBody = ({ items = [] }: IDrawerBody) => {
  return (
    <>
      <List>
        {items.map(({ text, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

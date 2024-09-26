import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const Sidebar = ({ onSelectItem }) => {
  const items = [
    "Home",
    "About",
    "Services",
    "Contact",
    "Home",
    "About",
    "Services",
    "Contact",
    "Home",
    "About",
    "Services",
    "Contact",
  ];

  return (
    <List>
      {items.map((item) => (
        <ListItem button key={item} onClick={() => onSelectItem(item)}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;

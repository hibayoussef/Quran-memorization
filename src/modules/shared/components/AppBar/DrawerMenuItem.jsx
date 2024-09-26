// /modules/shared/components/CustomAppBar/DrawerMenuItem.jsx

import React from "react";
import { ListItem, ListItemText, ListItemIcon, Divider } from "@mui/material";
import { Inbox, Mail, Search, Update, Logout } from "@mui/icons-material";

const icons = {
  Inbox: <Inbox />,
  Mail: <Mail />,
  Search: <Search />,
  Update: <Update />,
  Logout: <Logout />,
};

const DrawerMenuItem = ({ icon, text, onClick }) => {
  return (
    <>
      <ListItem button onClick={onClick}>
        <ListItemIcon>{icons[icon]}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
      <Divider />
    </>
  );
};

export default DrawerMenuItem;

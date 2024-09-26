// /modules/shared/components/CustomAppBar/CustomDrawer.jsx

import React from "react";
import { Drawer, List, Divider, Toolbar } from "@mui/material";
import DrawerMenuItem from "./DrawerMenuItem"; // Import the separated menu item component

const CustomDrawer = ({ drawerOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
      <Toolbar />
      <Divider />
      <List>
        <DrawerMenuItem icon="Inbox" text="الإشعارات" onClick={toggleDrawer} />
        <DrawerMenuItem icon="Search" text="البحث" onClick={toggleDrawer} />
        <DrawerMenuItem
          icon="Update"
          text="تحديث الملف الشخصي"
          onClick={toggleDrawer}
        />
        <DrawerMenuItem
          icon="Logout"
          text="تسجيل الخروج"
          onClick={toggleDrawer}
        />
      </List>
    </Drawer>
  );
};

export default CustomDrawer;

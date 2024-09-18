// /modules/shared/components/CustomAppBar/CustomAppBar.config.jsx

import React from "react";
import {
  Button,
  Typography,
  TextField,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { Avatar, Menu, MenuItem } from "@mui/material";
import DynamicSearchField from "../../../../components/shared/search/DynamicSearchField";

const colors = {
  primary: "#2C3971",
  secondary: "#fff",
  whatsAppGreen: "#25D366",
};

// Configuration for the first instance of the app bar
export const firstAppBarConfig = {
  height: "40px",
  backgroundColor: colors.primary,
  leftContent: (
    <Button
      component={Link}
      to="/login"
      variant="text"
      color="inherit"
      sx={{ color: "white" }}
    >
      تسجيل الدّخول
    </Button>
  ),
  rightContent: (
    <Typography
      variant="body2"
      color="white"
      sx={{ display: "flex", alignItems: "center", direction: "ltr" }}
    >
      <Box
        sx={{
          backgroundColor: colors.whatsAppGreen, // Green background
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%", // Make it circular
          width: 30, // Adjust the width and height to control the size
          height: 30,
          mr: 1,
        }}
      >
        <WhatsAppIcon sx={{ color: "white" }} /> {/* WhatsApp icon white */}
      </Box>
      +123 456 7890
    </Typography>
  ),
};

// Configuration for the second instance of the app bar
export const secondAppBarConfig = {
  height: "64px",
  backgroundColor: colors.secondary,
  leftContent: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        sx={{ bgcolor: "transparent", "&:hover": { bgcolor: "transparent" } }}
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon sx={{ color: colors.primary }} />
        </Badge>
      </IconButton>
      <DynamicSearchField
        placeholder="بحث..."
        onSearch={(query) => console.log("Searching for:", query)} // Replace with your search logic
      />
    </div>
  ),
  rightContent: (
    <div style={{ display: "flex", alignItems: "center", direction: "ltr" }}>
      <Typography variant="h6" sx={{ color: colors.primary, mr: 1 }}>
        Logo Name
      </Typography>
      <Avatar />
      <Typography variant="body1">User Name</Typography>
    </div>
  ),
};

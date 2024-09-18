// /modules/shared/components/CustomAppBar/CustomAppBar.config.jsx

import React from "react";
import { Button, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

const colors = {
    firstAppBarColor: "#2C3971",
    secondAppBarColor: "#fff"
};

// Configuration for one instance of the app bar
export const firstAppBarConfig = {
  height: "40px",
  backgroundColor: colors.firstAppBarColor, // Replace with actual color or theme palette
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
      <WhatsAppIcon sx={{ color: "white", mr: 1 }} /> +123 456 7890
    </Typography>
  ),
};

// Configuration for another instance of the app bar (if needed)
export const secondAppBarConfig = {
  title: "Another Title",
  height: "64px",
  backgroundColor: colors.secondAppBarColor, // Replace with actual color or theme palette
  leftContent: (
    <Button
      component={Link}
      to="/another"
      variant="text"
      color="inherit"
      sx={{ color: "white" }}
    >
      Another Button
    </Button>
  ),
  rightContent: (
    <Typography
      variant="body2"
      color="white"
      sx={{ display: "flex", alignItems: "center", direction: "ltr" }}
    >
      <WhatsAppIcon sx={{ color: "white", mr: 1 }} /> +987 654 3210
    </Typography>
  ),
};

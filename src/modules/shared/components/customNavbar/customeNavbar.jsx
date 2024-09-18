import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

const CustomeNavbar = ({
  title,
  onMenuClick,
  height = 64,
  showMenuIcon = true,
  backgroundColor,
  phoneNumber,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" sx={{ height, backgroundColor }}>
      <Toolbar
        sx={{
          height,
          minHeight: height, // Ensures minimum height
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2, // Optional padding
        }}
      >
        <Button
          component={Link}
          to="/login"
          variant="text"
          color="inherit"
          sx={{ color: "white"}} // Hide button if no title
        >
          تسجيل الدّخول
        </Button>
        {phoneNumber && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              color="inherit"
              sx={{ direction: "ltr", mr: 1 }}
            >
              {phoneNumber}
            </Typography>
            <WhatsAppIcon sx={{ color: "white" }} />
          </Box>
        )}
        {showMenuIcon && (
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ display: isMobile ? "block" : "none" }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
      </Toolbar>
    </AppBar>
  );
};

export default CustomeNavbar;

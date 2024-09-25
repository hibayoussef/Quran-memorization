import NotificationsIcon from "@mui/icons-material/Notifications";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Typography
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import UserDropdown from "../../../../components/shared/dropDown/DropDown";
import SearchComponent from "../../../../components/shared/search/Search";

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
      sx={{ color: colors.secondary }}
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
        <WhatsAppIcon sx={{ color: colors.secondary }} />{" "}
        {/* WhatsApp icon white */}
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
      <SearchComponent
        placeholder="بحث..."
        onSearch={(query) => console.log("Searching for:", query)} // Handle search logic here
        borderRadius="30px" // Custom border radius
        borderColor="gray" // Initial border color
        hoverBorderColor={colors.primary} // Border color on hover
        focusedBorderColor={colors.primary} // Border color on focus
        width="300px" // Set a custom width
        customStyles={{
          marginLeft: "16px", // Additional styles if needed
        }}
      />
    </div>
  ),
  rightContent: (
    <div style={{ display: "flex", alignItems: "center", direction: "ltr" }}>
      <Typography variant="h6" sx={{ color: colors.primary, mr: 1 }}>
        Logo Name
      </Typography>
    
      <UserDropdown
        avatarUrl="https://example.com/avatar.jpg"
        userName="Ahmad Ahmad"
        textColor={colors.primary}
        arrowSize={20} // Control the arrow size dynamically
        marginLeft={8}
        menuItems={["Update Profile", "Logout"]}
        onMenuItemClick={(item) => {
          if (item === "Logout") {
            // Handle logout logic
          } else if (item === "Update Profile") {
            // Navigate to update profile
          }
        }}
      />
    </div>
  ),
};

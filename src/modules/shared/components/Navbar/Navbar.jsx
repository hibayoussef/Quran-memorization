import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  StyledAppBar,
  StyledToolbar,
  Section,
  Section1,
} from "./Navbar.styles"; // Import the styles

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        {/* Left Section */}
        <Section>
          <Button
            component={Link}
            to="/login"
            variant="text"
            color="inherit"
            sx={{ color: "white", mr: 4 }} // Add space between login button and WhatsApp icon
          >
            تسجيل الدّخول
          </Button>
        </Section>

        {/* Right Section */}
        <Section1>
          <Typography
            variant="body2"
            color="white"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <WhatsAppIcon sx={{ color: "white", mr: 1 }} /> +123 456 7890
          </Typography>
        </Section1>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;

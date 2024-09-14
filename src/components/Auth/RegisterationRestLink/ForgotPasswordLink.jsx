import React from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const ForgotPasswordLink = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        height: "100%",
      }}
    >
      <NavLink to="/reset-password">
        <Typography
          variant="inputTitle"
          sx={{
            color: "headerText.main",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {"نسيت كلمة المرور؟"}
        </Typography>
      </NavLink>
    </Box>
  );
};

export default ForgotPasswordLink;

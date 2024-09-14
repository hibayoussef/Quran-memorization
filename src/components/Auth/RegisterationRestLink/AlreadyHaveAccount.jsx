import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const AlreadyHaveAccount = ({
  showDivider = true,
  questionText,
  linkText,
  linkUrl,
}) => {
  return (
    <>
      {showDivider && <Divider sx={{ width: "100%", my: 3 }} />}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography sx={{ color: "text.secondary" }}>
          {questionText}
        </Typography>
        <NavLink to={linkUrl}>
          <Typography
            sx={{
              color: "headerText.main",
              textDecoration: "underline",
              cursor: "pointer",
              ml: 1,
            }}
          >
            {linkText}
          </Typography>
        </NavLink>
      </Box>
    </>
  );
};

export default AlreadyHaveAccount;

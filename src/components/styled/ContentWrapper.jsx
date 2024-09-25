// src/shared/components/ContentWrapper.tsx
import React from "react";
import { Box } from "@mui/material";

const ContentWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: {
          lg: "0 16px",
          xs: "0 14px",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ContentWrapper;

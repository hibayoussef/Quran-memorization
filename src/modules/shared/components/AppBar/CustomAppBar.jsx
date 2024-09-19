// /modules/shared/components/CustomAppBar/CustomAppBar.jsx

import React from "react";
import { Typography } from "@mui/material";
import { StyledAppBar, StyledToolbar, StyledBox } from "./CustomAppBar.styles"; // Import styled components

const CustomAppBar = React.memo(
  ({ title, height, backgroundColor, leftContent, rightContent }) => {
    return (
      <StyledAppBar
        position="static"
        height={height}
        backgroundColor={backgroundColor}
      >
        <StyledToolbar>
          <StyledBox>{leftContent}</StyledBox>
          <Typography variant="h6">{title}</Typography>
          <StyledBox>{rightContent}</StyledBox>
        </StyledToolbar>
      </StyledAppBar>
    );
  }
);

export default CustomAppBar;

// /modules/shared/components/CustomAppBar/CustomAppBar.styles.js

import { styled } from "@mui/system";
import { AppBar, Toolbar, Box } from "@mui/material";

// Styled AppBar component
export const StyledAppBar = styled(AppBar)(
  ({ theme, height, backgroundColor }) => ({
    height: height || "40px", // Default height is 40px
    backgroundColor: backgroundColor || theme.palette.text.secondary, // Default to headerText color
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "50px", // Adjust height for small screens if needed
    },
  })
);

// Styled Toolbar component
export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px", // Adjust padding as needed
}));

// Styled Box component for left and right content
export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

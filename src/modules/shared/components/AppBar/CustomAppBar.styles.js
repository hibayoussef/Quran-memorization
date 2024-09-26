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
    position: "relative", // Ensure position is relative
    left: 0, // Ensuring it starts from the left edge
    right: 0, // Ensuring it spans to the right edge
    margin: 0, // Remove any margin
    padding: 0, // Remove any padding
    width: "100%", // Ensure full width
    [theme.breakpoints.down("sm")]: {
      height: "50px", // Adjust height for small screens if needed
      // The width will automatically be 100% since it’s defined above
    },
  })
);

// Styled Toolbar component
export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0", // Remove padding to avoid spacing issues
  [theme.breakpoints.down("sm")]: {
    padding: "0", // Adjust padding for small screens
  },
}));

// Styled Box component for left and right content
export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

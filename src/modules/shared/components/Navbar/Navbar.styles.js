import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

// AppBar styling
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: `${theme.palette.headerText.main} !important`,
  [theme.breakpoints.down("md")]: {
    padding: "0 8px", // Adjust padding for mobile
  },
}));

// Toolbar styling
export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
  },
}));

// Left section (login button) styling
export const Section = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    // flexGrow: 1,
    display: "flex",
    justifyContent: "flex-start",
  }
}));

// Right section (WhatsApp info) styling
export const Section1 = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

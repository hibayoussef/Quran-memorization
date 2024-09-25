// Footer.styles.js
import { Box, IconButton, styled } from "@mui/material";
import BackgroundURL from "../../../../assets/images/Hero.png";

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  backgroundImage: `url(${BackgroundURL})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: theme.palette.text.primary,
  direction: "ltr",
  width: "100%",
  position: "relative",
}));

export const FooterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: theme.breakpoints.values.lg,
  padding: theme.spacing(2),
}));

export const Section = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  width: "100%",
}));

export const FooterSection = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
  textAlign: "center",
}));

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

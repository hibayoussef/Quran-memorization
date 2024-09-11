import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { createTheme } from "../index";
import { GlobalStyle } from "../globalStyle";

export const ThemeProviderWraper = ({ children }) => {
  // const [direction, mode, responsiveFontSizes] = settingsStore((state) => [
  //   state.direction,
  //   state.mode,
  //   state.responsiveFontSizes,
  // ]);
  const theme = createTheme({
    direction: "rtl",
    mode: "light",
    responsiveFontSizes: true,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

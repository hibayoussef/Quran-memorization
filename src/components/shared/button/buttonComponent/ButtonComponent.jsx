// DynamicButton.js
import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { getButtonStyles } from "./ButtonComponent.styles"; // Import the styles

const ButtonComponent = ({
  text,
  onClick,
  variant = "contained",
  disabled = false,
  loading = false,
  noBackground = false,
  fullWidth = false,
  customStyles = {},
}) => {
  // Get the dynamic styles
  const buttonStyles = getButtonStyles({ noBackground, customStyles });

  return (
    <Button
      sx={buttonStyles}
      variant={noBackground ? "outlined" : variant}
      onClick={onClick}
      disabled={disabled || loading}
      fullWidth={fullWidth}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : text}
    </Button>
  );
};

export default ButtonComponent;

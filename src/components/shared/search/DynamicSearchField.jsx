import React, { useState } from "react";
import { TextField, InputAdornment, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const DynamicSearchField = ({
  placeholder = "بحث...",
  onSearch,
  fullWidthOnSmallScreens = true,
  customStyles = {},
  borderRadius = "20px",
  borderColor = "gray",
  hoverBorderColor = "#2C3971",
  focusedBorderColor = "#2C3971",
  width = "300px",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <TextField
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder={placeholder}
      variant="outlined"
      size="small"
      fullWidth={isSmallScreen && fullWidthOnSmallScreens}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: borderRadius, // Custom border radius from props
          "& fieldset": {
            borderColor: borderColor, // Default border color from props
          },
          "&:hover fieldset": {
            borderColor: hoverBorderColor, // Border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: focusedBorderColor, // Border color when focused
          },
        },
        width: isSmallScreen ? "100%" : width, // Responsive width control
        ...customStyles, // Allow additional styles to be passed
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default DynamicSearchField;

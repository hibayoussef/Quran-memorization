// DynamicSearchField.js
import React, { useState } from "react";
import { TextField, InputAdornment, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchFieldStyles } from "./Search.styles";

const SearchComponent = ({
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
      sx={searchFieldStyles(
        borderRadius,
        borderColor,
        hoverBorderColor,
        focusedBorderColor,
        isSmallScreen,
        width,
        customStyles
      )}
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

export default SearchComponent;
